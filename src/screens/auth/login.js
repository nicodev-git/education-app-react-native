import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import normalize from '../../helpers/sizeHelper';
import { Icon } from 'react-native-elements'

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
    label: state.common.label,
	});
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: ""
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onPressSignin = this.onPressSignin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.pressSignSignUp = this.pressSignSignUp.bind(this);
  }

  onChangeEmail(email) {
    this.setState({ email: email });
  }

  onChangePassword(password) {
    this.setState({ password: password });
  }

  onPressSignin() {
    this.props.navigation.navigate('Dashboard');
  }

  pressSignSignUp() {
    this.props.navigation.navigate('SignUp');
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
            
            <TouchableOpacity onPress={ this.onPressSignin }>
              <View style={[styles.buttonContainer, {backgroundColor: '#429321'}]}>
                <Text style={styles.buttonTitle}>Sign In</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ this.onPressSignin }>
              <View style={[styles.buttonContainer, { backgroundColor: '#bd2031' }]}>
                <Image style={styles.textImage} source={require('../../../assets/icons/google.png')}></Image>
                <Text style={styles.buttonTitle}>Google</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.onPressSignin }>
              <View style={[styles.buttonContainer, { backgroundColor: '#62B1F6' }]}>
                <Image style={styles.textImage} source={require('../../../assets/icons/facebook.png')}></Image>
                <Text style={styles.buttonTitle}>Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.pressSignSignUp }>
              <View style={styles.signUpButton}>
                <Text style={styles.signupText}>
                  Not a Member? Sign Up {' '}
                </Text>
                <Image style={styles.signUpImage} source={require('../../../assets/icons/signup-green.png')}></Image>
              </View>
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
    backgroundColor: 'rgba(255,255,255, 0.5)',
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
  signUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  signupText: {
    fontSize: normalize(16),
    color: '#42c000',
    textAlign: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
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
  textImage: {
    width: normalize(16),
    height: normalize(16),
    marginRight: 10
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);