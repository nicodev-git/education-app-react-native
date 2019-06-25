import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
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



class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      grades: [
        {
          id: 1,
          rate: 5,
          is_subscribed: true,
        }, {
          id: 2,
          rate: 4,
          is_subscribed: true,
        }, {
          id: 3,
          rate: 2,
          is_subscribed: true,
        }, {
          id: 4,
          rate: 5,
          is_subscribed: false,
        }, {
          id: 5,
          rate: 3,
          is_subscribed: false,
        }, {
          id: 6,
          rate: 2,
          is_subscribed: false,
        },
      ],
      videos: [
        {
          id: 1,
          text: 'Study',
          url: require('../../../assets/videos/1.jpg')
        }, {
          id: 2,
          text: 'Cooperation',
          url: require('../../../assets/videos/2.jpg')
        }, {
          id: 3,
          text: 'Brainstorm',
          url: require('../../../assets/videos/3.jpg')
        }, {
          id: 4,
          text: 'Enjoy',
          url: require('../../../assets/videos/4.jpg')
        }, {
          id: 5,
          text: 'Mates',
          url: require('../../../assets/videos/7.jpg')
        }, {
          id: 6,
          text: 'Relax',
          url: require('../../../assets/videos/6.jpg')
        },
        {
          id: 7,
          text: 'Study',
          url: require('../../../assets/videos/1.jpg')
        }, {
          id: 8,
          text: 'Cooperation',
          url: require('../../../assets/videos/2.jpg')
        }, {
          id: 9,
          text: 'Brainstorm',
          url: require('../../../assets/videos/3.jpg')
        }, {
          id: 10,
          text: 'Enjoy',
          url: require('../../../assets/videos/4.jpg')
        }, {
          id: 11,
          text: 'Mates',
          url: require('../../../assets/videos/7.jpg')
        }, {
          id: 12,
          text: 'Relax',
          url: require('../../../assets/videos/6.jpg')
        }, 
        {
          id: 12,
          text: 'Mates',
          url: require('../../../assets/videos/5.jpg')
        },

      ]
    }

    this.goToGrade = this.goToGrade.bind(this)
    this.goToVideo = this.goToVideo.bind(this)
    this.createRateView = this.createRateView.bind(this)
  }

  goToGrade() {
    this.props.navigation.navigate('Grade')
  }

  goToVideo() {
    this.props.navigation.navigate('Video')
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

        <View style={styles.headerSection}>
          <Header header={ 'Dashboard' } />
        </View>

        <View style={styles.container}>
          <View style={styles.gradesSection}>
            <Text style={styles.videoTitle}>Grades</Text>
            <View style={styles.verticalScrollSection}>
              <ScrollView style={{ width: width }}>

                {
                  groups.map((group, index) => {
                    return (
                      <View key={`group${index}`} style={styles.gradeGroup}>
                        {
                          group.map((item, idx) => {
                            return (
                              <TouchableOpacity key={`item${idx}`} onPress={() => this.goToGrade()}>
                                <View style={styles.gradeItem}>
                                  <ImageBackground style={styles.gradeImage} source={require('../../../assets/images/grade.png')}>
                                    <Text style={styles.gradeTitle}>{ item.id }</Text>
                                  </ImageBackground>
                                  <View style={styles.ratingSection}>
                                    {
                                      // this.createRateView(item.rate)
                                    }
                                    <Text style={styles.emptyString}>{ " " }</Text>
                                  </View>
                                  {
                                    item.is_subscribed == true ?
                                      <View style={styles.badgeSection}>
                                        <Image style={styles.badgeImage} source={require('../../../assets/icons/checked.png')}></Image>
                                      </View>
                                    :
                                      null
                                  }
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
          <View style={styles.videoSection}>
            <Text style={styles.videoTitle}>Featured Videos</Text>
            <View style={styles.horizontalScrollSection}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                {
                  this.state.videos.map((item, index) => {
                    return (
                      <TouchableOpacity key={`video${index}`} onPress={() => this.goToVideo()}>
                        <View style={styles.videoItem}>
                          <Image style={styles.videoImage} source={item.url}>
                          </Image> 
                          <View style={styles.videoCaptionWrapper}>
                            <Text style={styles.videoCaption} numberOfLines={1}>{item.text}</Text>
                          </View>
                          <Image style={styles.playImage} source={require('../../../assets/icons/play-black.png')}></Image>
                        </View>
                      </TouchableOpacity>
                    )
                  })
                }
                
              </ScrollView>
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



  gradesSection: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center'
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



  ratingSection: {
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
  ratingImage: {
    width: normalize(16),
    height: normalize(16),
    margin: 5,
    marginRight: 0,
  },
  emptyString: {
    fontSize: normalize(16),
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



  videoTitle: {
    margin: 5,
    fontSize: normalize(14),
    color: '#42c000'
  },
  horizontalScrollSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoItem: {
    width: normalize(90),
    height: normalize(90),
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: '#f2f2f2',
    backgroundColor: '#f2f2f2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoImage: {
    borderRadius: 5,
    width: '100%',
    height: '100%'
  },
  videoCaption: {
    fontSize: normalize(12),
    margin: 0,
    padding: 0,
    color: '#fff',
    
  },
  videoCaptionWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    padding: 5,
    paddingTop: 2,
    backgroundColor: 'rgba(66,192,0, 0.7)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  playImage: {
    width: normalize(30),
    height: normalize(30),
    position: 'absolute',
    bottom: normalize(30),
    left: normalize(30)
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)