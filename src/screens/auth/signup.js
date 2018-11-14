import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, NativeModules } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import normalize from '../../helpers/sizeHelper';

import * as commonActions from '../../actions/common';
import * as userActions from '../../actions/user';

const { height, width } = Dimensions.get('window');

const mapDispatchToProps = (dispatch) => {
	return ({
    userActions: bindActionCreators({...userActions}, dispatch),
    commonActions: bindActionCreators({...commonActions}, dispatch)
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label
	});
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: ""
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onPressSignUp = this.onPressSignUp.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.pressSignSignIn = this.pressSignSignIn.bind(this);
  }

  onChangeEmail(email) {
    this.setState({ email: email });
  }

  onChangePassword(password) {
    this.setState({ password: password });
  }

  onPressSignUp() {
    this.props.navigation.navigate('WelcomeNew');
  }

  pressSignSignIn() {
    this.props.navigation.navigate('Login');
  }

  render() {

    return(
      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.jpg')}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image style={styles.headerImage} source={require('../../../assets/images/logo_green.png')}></Image>
            {
              this.state.message != "" ?
                <Text style={styles.messageText}>{this.state.message}</Text>
              :
                null
            }
            <TextInput 
              onChangeText={(email) => this.onChangeEmail(email)}
              style={styles.inputField}
              value={this.state.email}
              placeholder={"Email"}/>
            <TextInput 
              secureTextEntry={ true }
              onChangeText={(password) => this.onChangePassword(password)}
              style={styles.inputField}
              value={this.state.password}
              placeholder={"Password"}/>
            
            <TouchableOpacity onPress={this.onPressSignUp}>
              <View style={[styles.buttonContainer, {backgroundColor: '#429321'}]}>
                <Text style={styles.buttonTitle}>Sign Up</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.pressSignSignIn }>
              <Text style={styles.signinText}>
                Already Member? Sign In {' '}
                <Image style={styles.signUpImage} source={require('../../../assets/icons/signin-green.png')}></Image>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
  homeImage: {
    width: '100%',
    height: '100%',
  },
  headerImage: {
    width: normalize(200),
    height: normalize(60),
    margin: 15
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputField: {
    padding: 10,
    paddingLeft: 18,
    paddingRight: 18,
    width: width - 60,
    color: '#42c000',
    fontSize: normalize(16),
    borderWidth: 2,
    borderColor: '#429321',
    borderRadius: normalize(36),
    backgroundColor: 'rgba(255,255,255, 0.2)',
    margin: 15,
    marginTop: 5,
  },
  messageText: {
    color: '#d00',
    textAlign: 'center',
    fontSize: normalize(16),
  },
  signinText: {
    fontSize: normalize(16),
    color: '#42c000',
    textAlign: 'center',
    padding: 30,
  },
  signUpImage: {
    width: normalize(16),
    height: normalize(16)
  },
  buttonContainer: {
    width: width - 60,
    margin: 15,
    padding: 10,
    borderRadius: normalize(36),
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
});



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);