import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import normalize from './src/helpers/sizeHelper';

import WelcomeScreen from './src/screens/welcomeScreen';
import Menu from './src/screens/menu';

import Login from './src/screens/auth/login';
import SignUp from './src/screens/auth/signup';
import WelcomeNew from './src/screens/auth/welcomeNew';


import Dashboard from './src/screens/dashboard';
import Grade from './src/screens/grade';
import Video from './src/screens/video';
import Profile from './src/screens/profile';
import Payment from './src/screens/payment';
import GradeSelection from './src/screens/payment/gradeSelection';


const WelcomeStack = {
  WelcomeScreen: { screen: WelcomeScreen }
};

const AuthStack = {
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  WelcomeNew: { screen: WelcomeNew }
};

const MainStack = {
  Dashboard: { screen: Dashboard },
  Grade: { screen: Grade },
  Video: { screen: Video },
  Profile: { screen: Profile },
  GradeSelection: { screen: GradeSelection },
  Payment: { screen: Payment }
};

const DrawerStack = createDrawerNavigator(MainStack, {
  drawerWidth: normalize(300),
  contentComponent: Menu
});

const AppNavigator = createStackNavigator({
  ...WelcomeStack,
  ...AuthStack,

  Drawer: {
    name: 'Drawer',
    screen: DrawerStack,
  },
}, {
    mode: 'modal',
    headerMode: 'none',
});



const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}




class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <AppNavigator />
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Router);
