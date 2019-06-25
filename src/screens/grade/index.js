import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
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



class Grade extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentGrade: {
        id: 1,
        rate: 5,
        is_subscribed: true,
        
        score: 4,
        complete: 1,
        test: 3,
        bonus: 2,
      },
      subjects: [
        {
          id: 1,
          title: 'History',
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
              id: 6,
              text: 'Relax',
              url: require('../../../assets/videos/6.jpg')
            },
            {
              id: 12,
              text: 'Mates',
              url: require('../../../assets/videos/5.jpg')
            },
          ]
        }, {
          id: 2,
          title: 'Maths',
          videos: [
            {
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
            }, 
            {
              id: 12,
              text: 'Mates',
              url: require('../../../assets/videos/5.jpg')
            },
          ]
        },  {
          id: 3,
          title: 'Culture',
          videos: [
            {
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
            },
            {
              id: 12,
              text: 'Mates',
              url: require('../../../assets/videos/5.jpg')
            },
          ]
        },   {
          id: 4,
          title: 'Information Tech',
          videos: [
            {
              id: 3,
              text: 'Brainstorm',
              url: require('../../../assets/videos/1.jpg')
            }, {
              id: 4,
              text: 'Enjoy',
              url: require('../../../assets/videos/3.jpg')
            }, {
              id: 5,
              text: 'Mates',
              url: require('../../../assets/videos/6.jpg')
            },
            {
              id: 12,
              text: 'Mates',
              url: require('../../../assets/videos/5.jpg')
            },
          ]
        }
      ]
    }

    this.createRateView = this.createRateView.bind(this)
    this.goToVideo = this.goToVideo.bind(this)
    this.createRateViewGreen = this.createRateViewGreen.bind(this)
    this.onPressSubscribe = this.onPressSubscribe.bind(this)
  }

  goToVideo() {
    this.props.navigation.navigate('Video')
  }

  onPressSubscribe() {
    this.props.navigation.navigate('GradeSelection')
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

  createRateViewGreen(rate) {
    let data = []
    for (let i=0; i< rate; i+= 1) {
      data.push(<Image key={`rate_star${i}`} style={styles.ratingImageGreen} source={require('../../../assets/icons/star-fill.png')}></Image>)
    }
    for (let i=0; i< 5 - rate; i+= 1) {
      data.push(<Image key={`rate_star_n${i}`} style={styles.ratingImageGreen} source={require('../../../assets/icons/star-outline.png')}></Image>)
    }
    return data
  }


  render() {

    return (

      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.jpg')}>

      <View style={styles.screen}>

        <View style={styles.headerSection}>
          <Header header={ 'Grade 3' } />
        </View>

        <View style={styles.container}>

          <View style={styles.head}>

            <View style={styles.gradeItem}>
              <ImageBackground style={styles.gradeImage} source={require('../../../assets/images/grade.png')}>
                <Text style={styles.gradeTitle}>{ this.state.currentGrade.id }</Text>
              </ImageBackground>
              <View style={styles.ratingSection}>
                {
                  this.createRateView(this.state.currentGrade.rate)
                }
              </View>
              {
                this.state.currentGrade.is_subscribed == true ?
                  <View style={styles.badgeSection}>
                    <Image style={styles.badgeImage} source={require('../../../assets/icons/checked.png')}></Image>
                  </View>
                :
                  null
              }
            </View>

            <View style={styles.headDescription}>
              <View style={styles.ratingItem}>
                <Text style={styles.ratingCaption}>Score : </Text>
                <View style={styles.ratingPart}>
                  {
                    this.createRateViewGreen(this.state.currentGrade.score)
                  }
                </View>
              </View>
              <View style={styles.ratingItem}>
                <Text style={styles.ratingCaption}>Complete : </Text>
                <View style={styles.ratingPart}>
                  {
                    this.createRateViewGreen(this.state.currentGrade.complete)
                  }
                </View>
              </View>
              <View style={styles.ratingItem}>
                <Text style={styles.ratingCaption}>Test : </Text>
                <View style={styles.ratingPart}>
                  {
                    this.createRateViewGreen(this.state.currentGrade.test)
                  }
                </View>
              </View>
              <View style={styles.ratingItem}>
                <Text style={styles.ratingCaption}>Bonus : </Text>
                <View style={styles.ratingPart}>
                  {
                    this.createRateViewGreen(this.state.currentGrade.bonus)
                  }
                </View>
              </View>
              <View style={styles.ratingItem}>
                <Text style={styles.ratingCaption}>Total : </Text>
                <View style={styles.ratingPart}>
                  {
                    this.createRateViewGreen(this.state.currentGrade.rate)
                  }
                </View>
              </View>
            </View>

          </View>

          <View style={styles.body}>
            <ScrollView style={{ width: width }}>

              {
                this.state.subjects.map((item, index) => {
                  return (
                    <View key={`subject${index}`} style={styles.subjectGroup}>
                      <View style={styles.videoSection}>
                        <Text style={styles.subjectTitle}>{ item.title }</Text>
                        <View style={styles.horizontalScrollSection}>
                          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: width }}>
                            {
                              item.videos.map((video, idx) => {
                                return (
                                  <TouchableOpacity key={`video${item.title}${idx}`} onPress={() => this.goToVideo()}>
                                    <View style={styles.videoItem}>
                                      <Image style={styles.videoImage} source={video.url}>
                                      </Image>
                                      <View style={styles.videoCaptionWrapper}>
                                        <Text style={styles.videoCaption} numberOfLines={1}>{ video.text }</Text>
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
                  )
                })
              }

            </ScrollView>
          </View>

          <View style={styles.foot}>
            <TouchableOpacity onPress={this.onPressSubscribe}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Subscribe</Text>
              </View>
            </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  headDescription: {
    flex: 1,
    margin: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  ratingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  ratingCaption: {
    margin: 5,
    marginLeft: 0,
    marginBottom: 0,
    flex: 1,
    fontSize: normalize(12),
    color: '#42c000'
  },
  ratingPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  ratingImageGreen: {
    width: normalize(12),
    height: normalize(12),
    margin: 5,
    marginBottom: 0,
    marginRight: 0,
  },

  badgeSection: {
    position: 'absolute',
    width: normalize(20),
    top: 0 - normalize(10),
    right: 0 - normalize(10)
  },
  badgeImage: {
    width: normalize(20),
    height: normalize(20)
  },





  body: {
    flex: 1,
  },
  subjectGroup: {
    flexDirection : 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  subjectTitle: {
    margin: 5,
    fontSize: normalize(14),
    color: '#42c000'
  },
  videoSection: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  horizontalScrollSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },






  foot: {
    margin: 15,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },




  buttonContainer: {
    width: width - 90,
    padding: 10,
    borderRadius: normalize(36),
    backgroundColor: '#429321',
    flexDirection: 'column',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 15,
  },
  buttonTitle: {
    fontSize: normalize(16), 
    color: '#ffffff',
    fontWeight: 'normal',
    textAlign: 'center'
  },




  gradeItem: {
    width: (width - 30) / 3,
    height: (width - 30) / 3,
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
    fontSize: normalize(44),
    color: '#fff',
    textAlign: 'center'
  },
  ratingSection: {
    position: 'absolute',
    width: (width - 30) / 3,
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
    width: normalize(12),
    height: normalize(12),
    margin: 5,
    marginRight: 0,
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



export default connect(mapStateToProps, mapDispatchToProps)(Grade)