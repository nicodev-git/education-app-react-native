import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
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

class WelcomeNew extends React.Component {
  constructor(props) {
    super(props)

    this.pressHome = this.pressHome.bind(this)
  }

  pressHome() {
    this.props.navigation.navigate('Dashboard')
  }

  render() {

    return(
      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.jpg')}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.contentText}>Your registration is succeed. You can look for and study the courses you want.</Text>
          <TouchableOpacity onPress={ this.pressHome }>
            <View style={styles.homeButton}>
              <Text style={styles.homeText}>
                Go to Home{' '}
              </Text>
              <Image style={styles.nextImage} source={require('../../../assets/icons/next-green.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.5)',
  },
  homeImage: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: normalize(32),
    color: '#429321',
    padding: 15,
  },
  contentText: {
    fontSize: normalize(20),
    color: '#42c000',
    textAlign: 'center',
    padding: 15
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  homeText: {
    fontSize: normalize(20),
    color: '#42c000',
    textAlign: 'center',
  },
  nextImage: {
    width: normalize(20),
    height: normalize(20)
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(WelcomeNew)