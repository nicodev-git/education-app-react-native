import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import normalize from '../../helpers/sizeHelper'

import * as commonActions from '../../actions/common'
import * as userActions from '../../actions/user'

const { height, width } = Dimensions.get('window')


const mapDispatchToProps = (dispatch) => {
  return ({
    userActions: bindActionCreators({...userActions}, dispatch),
    commonActions: bindActionCreators({...commonActions}, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
  })
}



class GradeSelection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      grades: [
        {
          id: 1,
          rate: 5,
          is_subscribed: true,
          price: 250,
        }, {
          id: 2,
          rate: 4,
          is_subscribed: true,
          price: 400,
        }, {
          id: 3,
          rate: 2,
          is_subscribed: true,
          price: 600,
        }, {
          id: 4,
          rate: 5,
          is_subscribed: false,
          price: 500,
        }, {
          id: 5,
          rate: 3,
          is_subscribed: false,
          price: 800,
        }, {
          id: 6,
          rate: 2,
          is_subscribed: false,
          price: 1000,
        },
      ],
    }

    this.createRateView = this.createRateView.bind(this)
    this.goToPayment = this.goToPayment.bind(this)
  }

  createRateView(rate) {
    let data = []
    for (let i=0; i< rate; i+= 1) {
      data.push(<Image key={`rate_star${i}`} style={styles.ratingImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>)
    }
    for (let i=0; i< 5 - rate; i+= 1) {
      data.push(<Image key={`rate_star_n${i}`} style={styles.ratingImage} source={require('../../../assets/icons/star-outline-y.png')}></Image>)
    }
    return data
  }

  goToPayment() {
    this.props.navigation.navigate('Payment')
  }


  render() {

    let tempList = []
    let groups = []
    this.state.grades.map(item => {
      tempList.push(item)
      if (tempList.length == 2) {
        groups.push(tempList)
        tempList = []
      }
    })

    return (
      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.jpg')}>
        <View style={styles.screen}>
          <Text style={styles.title}>Select a Grade</Text>
          <View style={styles.verticalScrollSection}>
            <ScrollView style={{ width: width }}>

              {
                groups.map((group, index) => {
                  return (
                    <View key={`group${index}`} style={styles.gradeGroup}>
                      {
                        group.map((item, idx) => {
                          return (
                            <TouchableOpacity key={`item${idx}`} onPress={() => this.goToPayment()}>
                              <View style={styles.gradeItem}>
                                <ImageBackground style={styles.gradeImage} source={require('../../../assets/images/grade.png')}>
                                  <Text style={styles.gradeTitle}>{ item.id }</Text>
                                </ImageBackground>
                                <View style={styles.priceSection}>
                                  <Text style={styles.priceText}>USD { item.price }</Text>
                                </View>
                                {/* {
                                  item.is_subscribed == true ?
                                    <View style={styles.badgeSection}>
                                      <Image style={styles.badgeImage} source={require('../../../assets/icons/checked.png')}></Image>
                                    </View>
                                  :
                                    null
                                } */}
                              </View>
                            </TouchableOpacity>
                          )
                        })
                      }
                    </View>
                  )
                })
              }

            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    )

  }

}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeImage: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: normalize(32),
    color: '#42c000',
    textAlign: 'center',
    margin: 15,
  },



  verticalScrollSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstTitle: {
    margin: 5,
    fontSize: normalize(14),
    color: '#42c000'
  },
  gradeGroup: {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoSection: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  gradeItem: {
    width: (width - 30) / 2 - 30,
    height: (width - 30) / 2 - 30,
    margin: 15,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradeImage: {
    width: '100%',
    height: '100%'
  },
  gradeTitle: {
    fontSize: normalize(54),
    color: '#fff',
    textAlign: 'center'
  },



  priceSection: {
    position: 'absolute',
    width: (width - 30) / 2 - 30,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(66,192,0, 0.7)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceText: {
    fontSize: normalize(16),
    color: '#ffffff',
    margin: 5,
  },

  badgeSection: {
    position: 'absolute',
    width: normalize(24),
    top: 0 - normalize(12),
    right: 0 - normalize(12)
  },
  badgeImage: {
    width: normalize(24),
    height: normalize(24)
  },
  
})



export default connect(mapStateToProps, mapDispatchToProps)(GradeSelection)