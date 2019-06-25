import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import normalize from '../../helpers/sizeHelper'

import Footer from '../footer'
import Header from '../header'

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



class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    return (

      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.jpg')}>

      <View style={styles.screen}>

        <View style={styles.headerSection}>
          <Header header={ 'Profile' } />
        </View>

        <View style={styles.container}>

          <View style={styles.head}>
            <ImageBackground style={styles.coverImage} source={require('../../../assets/avatars/avatar12.jpg')}>
            </ImageBackground>
          </View>

          <View style={styles.body}>

            <View style={styles.headDescription}>
              <View style={styles.progressChat}>
                <View style={styles.chatItem}>
                  <AnimatedCircularProgress
                    size={width/3 - 30}
                    width={normalize(5)}
                    fill={20}
                    tintColor="rgb(134, 65, 244)"
                    backgroundColor="#00e0ff">
                    {
                      (fill) => (
                        <View style={{ alignItems: 'center' }}>
                          <Text style={styles.points}>20%</Text>
                          <Text style={styles.caption}>Complete</Text>
                        </View>
                      )
                    }
                  </AnimatedCircularProgress>
                </View>
                <View style={styles.chatItem}>
                  <AnimatedCircularProgress
                    size={width/3 - 30}
                    width={normalize(5)}
                    fill={70}
                    tintColor="rgb(134, 65, 244)"
                    backgroundColor="#00e0ff">
                    {
                      (fill) => (
                        <View style={{ alignItems: 'center' }}>
                          <Text style={styles.points}>70%</Text>
                          <Text style={styles.caption}>Score</Text>
                        </View>
                      )
                    }
                  </AnimatedCircularProgress>
                </View>
                <View style={styles.chatItem}>
                  <AnimatedCircularProgress
                    size={width/3 - 30}
                    width={normalize(5)}
                    fill={20}
                    tintColor="rgb(134, 65, 244)"
                    backgroundColor="#00e0ff">
                    {
                      (fill) => (
                        <View style={{ alignItems: 'center' }}>
                          <Text style={styles.points}>60%</Text>
                          <Text style={styles.caption}>Rate</Text>
                        </View>
                      )
                    }
                  </AnimatedCircularProgress>
                </View>
              </View>
            </View>

          </View>

        </View>

        <View style={styles.footerSection}>
          <Footer
            onPressHome={ () => this.props.navigation.navigate('Dashboard') }
            onPressMenu={ () => this.props.navigation.openDrawer() }
          />
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
  },
  headerSection: {
    flex: 1,
  },
  footerSection: {
    flex: 1
  },
  container: {
    flex: 10,
  },
  homeImage: {
    width: '100%',
    height: '100%',
  },



  head: {
    flex: 2
  },
  body: {
    flex: 3,
    alignItems: 'flex-start'
  },
  coverImage: {
    height: '100%',
  },


  headDescription: {
    flex: 1,
    margin: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  progressChat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  chatItem: {
    flex: 1,
    padding: 5,
    alignItems: 'center'
  },
  points: {
    fontSize: normalize(24),
    color: '#00e0ff',
  },
  caption: {
    fontSize: normalize(12),
    color: '#00e0ff',
  },


  

  
})



export default connect(mapStateToProps, mapDispatchToProps)(Profile)