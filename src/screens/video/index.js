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



class Video extends React.Component {

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
          <Header header={ 'Video' } />
        </View>

        <View style={styles.container}>

          <View style={styles.head}>
            <ImageBackground style={styles.coverImage} source={require('../../../assets/videos/5.jpg')}>
              <Image style={styles.playImage} source={require('../../../assets/icons/play-black.png')}></Image>
            </ImageBackground>
          </View>

          <View style={styles.body}>
            <ScrollView>
              <Text style={styles.title}>Advanced React and Redux: 2018 Edition</Text>
              <Text style={styles.description}>Detailed Walkthroughs on advanced React and Redux concepts - Authentication, Testing, Middlewares, HOC's, and Deployment</Text>
              <View style={styles.metaInfo}>
                <View style={styles.metaItem}>
                  <Image style={styles.metaIcon} source={require('../../../assets/icons/star-fill.png')}></Image>
                  <Text style={styles.metaText} numberOfLines={1}>4.7</Text>
                </View>
                <View style={styles.metaItem}>
                  <Image style={styles.metaIcon} source={require('../../../assets/icons/profile.png')}></Image>
                  <Text style={styles.metaText} numberOfLines={1}>46.5k Enrolled</Text>
                </View>
                <View style={styles.metaItem}>
                  <Image style={styles.metaIcon} source={require('../../../assets/icons/play-green-light.png')}></Image>
                  <Text style={styles.metaText} numberOfLines={1}>20 hours 57 minutes</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaText} numberOfLines={1}>Created by IT ASSASSIN</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaText} numberOfLines={1}>Updated 06/2018</Text>
                </View>
                <View style={styles.metaItem}>
                  <Text style={styles.metaText} numberOfLines={1}>CC, English, Portuguese, Spanish, Russian</Text>
                </View>
              </View>
            </ScrollView>
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
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  coverImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playImage: {
    width: normalize(90),
    height: normalize(90),
  },



  body: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  title: {
    margin: 15,
    fontSize: normalize(20),
    color: '#429321'
  },
  description: {
    margin: 15,
    marginTop: 0,
    fontSize: normalize(14),
    color: '#42c000'
  },
  metaInfo: {
    margin: 15,
    marginTop: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  metaItem: {
    margin: 5,
    padding: 3,
    paddingLeft: (6 + normalize(12)) / 2,
    paddingRight: (6 + normalize(12)) / 2,
    borderWidth: 2,
    borderColor: '#429321',
    borderRadius: 6 + normalize(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  metaText: {
    margin: 0,
    padding: 0,
    fontSize: normalize(10),
    color: '#42c000',
    textAlign: 'center'
  },
  metaIcon: {
    width: normalize(10),
    height: normalize(10),
    marginRight: 3,
  }

  
})



export default connect(mapStateToProps, mapDispatchToProps)(Video)