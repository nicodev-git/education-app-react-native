import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import normalize from '../helpers/sizeHelper';

import * as commonActions from '../actions/common';
import * as userActions from '../actions/user';

const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
    userActions: bindActionCreators({...userActions}, dispatch),
    commonActions: bindActionCreators({...commonActions}, dispatch)
	});
}

const mapStateToProps = (state) => {
	return ({
    loading: state.common.loading,
    label: state.common.label,
	});
}

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.pressSignIn = this.pressSignIn.bind(this);
  }

  componentDidMount() {
  }

  pressSignIn() {
    this.props.navigation.navigate('Login');
  }

  render() {

    return(
      <ImageBackground style={styles.homeImage} source={require('../../assets/images/background.jpg')}>
        <View style={styles.container}>
          <Image style={styles.headerImage} source={require('../../assets/images/logo_green.png')}></Image>
          <Text style={styles.contentText}>This is a new kind of Education App. You can look for your online courses and learn whatever you want. Enjoy your life yourself.</Text>
          <TouchableOpacity style={styles.signInButton} onPress={ this.pressSignIn }>
            <Text style={styles.signinText}>
              Sign In{' '}
              <Image style={styles.signInImage} source={require('../../assets/icons/signin-green.png')}></Image>
            </Text>
          </TouchableOpacity>
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
    marginBottom: 15
  },
  contentText: {
    fontSize: normalize(20),
    color: '#42c000',
    textAlign: 'center',
    padding: 15
  },
  signInButton: {
  },
  signinText: {
    fontSize: normalize(20),
    color: '#42c000',
    textAlign: 'center',
    padding: 30,
  },
  signInImage: {
    width: normalize(20),
    height: normalize(20)
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);