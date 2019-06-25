import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import normalize from '../../helpers/sizeHelper'

import Loading from '../loading'

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



class Payment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      label: 'Subscribing'
    }

    this.onPressPay = this.onPressPay.bind(this)
    this.closeLoading = this.closeLoading.bind(this)
  }

  onPressPay() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
      this.props.navigation.navigate('Grade')
    }, 8000)
  }

  closeLoading() {
    this.setState({ loading: false })
  }


  render() {

    return (
      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.jpg')}>
        <View style={styles.screen}>
          <Text style={styles.title}>Are you ready?</Text>
          <Text style={styles.contentText}>You can download all videos and documents for this grade if you pay $500. And also you can have the tests for all subjects and communicate with so many experienced teathers and other students.</Text>
          <TouchableOpacity onPress={this.onPressPay}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonTitle}>Pay $500 Now</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Loading show={this.state.loading} label={this.state.label} closeLoading={this.closeLoading}></Loading>
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
  contentText: {
    fontSize: normalize(20),
    color: '#42c000',
    textAlign: 'center',
    margin: 15,
    marginTop: 0,
    marginBottom: 30
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
  
})



export default connect(mapStateToProps, mapDispatchToProps)(Payment)