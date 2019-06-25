import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import normalize from '../helpers/sizeHelper'
import * as Progress from 'react-native-progress'

import Footer from './footer'

import * as commonActions from '../actions/common'
import * as userActions from '../actions/user'

const { height, width } = Dimensions.get('window')

const menuList = [
  {
    name: 'Dashboard',
    component: 'Dashboard',
    icon: require('../../assets/icons/home-green.png'),
    params: {}
  },
  {
    name: 'Activities',
    component: 'Activity',
    icon: require('../../assets/icons/activities.png'),
    params: {}
  },
  {
    name: 'Contacts',
    component: 'Contact',
    icon: require('../../assets/icons/contacts.png'),
    params: {}
  },
  {
    name: 'Profile',
    component: 'Profile',
    icon: require('../../assets/icons/profile.png'),
    params: {}
  },
  {
    name: 'Trust & Verification',
    component: 'Trust',
    icon: require('../../assets/icons/verification.png'),
    params: {}
  },
  {
    name: 'Settings',
    component: 'Setting',
    icon: require('../../assets/icons/settings.png'),
    params: {}
  }
]

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



class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  handleClick(item) {
    this.props.navigation.navigate(item.component, item.params)
  }

  signOut() {
    this.props.navigation.navigate('Login')
  }

  render() {

    return (
      <View style={styles.screen}>
        <View style={styles.headerSection}>
          <Image style={styles.logoImage} source={require('../../assets/avatars/avatar12.jpg')}></Image>
          <View style={styles.headerInfoSection}>
            <Text style={styles.name}>Julia D.</Text>
            <View style={styles.ratingSection}>
              <Image style={styles.ratingImage} source={require('../../assets/icons/star-fill-y.png')}></Image>
              <Image style={styles.ratingImage} source={require('../../assets/icons/star-fill-y.png')}></Image>
              <Image style={styles.ratingImage} source={require('../../assets/icons/star-fill-y.png')}></Image>
              <Image style={styles.ratingImage} source={require('../../assets/icons/star-fill-y.png')}></Image>
              <Image style={styles.ratingImage} source={require('../../assets/icons/star-outline-y.png')}></Image>
            </View>
            <Text style={styles.profile}>Profile 75%.</Text>
            <View style={styles.progressBarSection}>
              <Progress.Bar width={ normalize(300) - normalize(150)} color={'rgb(134, 65, 244)'} borderWidth={0} unfilledColor={'#ffffff'} progress={0.75} />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={ styles.menu }>
            {
              menuList.map((item, i) => 
                <TouchableOpacity key={i} onPress={ () => this.handleClick(item)} style={ styles.listItem }>
                    <Image style={styles.itemImage} source={item.icon}></Image>
                    <Text style={styles.textItem}>{item.name}</Text>
                </TouchableOpacity>
              )
            }
            <TouchableOpacity onPress={this.signOut} style={ styles.listItem }>
                <Image style={styles.itemImage} source={require('../../assets/icons/signout-green.png')}></Image>
                <Text style={styles.textItem}>Sign Out</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.closeButton}>
            <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
              <Image style={styles.closeImage} source={require('../../assets/icons/close-green.png')}></Image>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    )

  }

}


const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#42c000',
  },
  container: {
    flex: 3,
  },


  logoImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    margin: 15,
  },
  headerInfoSection: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginRight: 15,
    marginBottom: 15
  },
  name: {
    fontSize: normalize(20),
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBarSection: {
    marginBottom: 5,
  },
  profile: {
    fontSize: normalize(16),
    color: '#ffffff',
    fontWeight: 'normal',
    marginBottom: 5,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 5,
  },
  ratingImage: {
    width: normalize(16),
    height: normalize(16),
    marginRight: 5,
  },
  closeButton: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  closeImage: {
    width: normalize(22),
    height: normalize(22),
    margin: 15,
  },
  menu: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 15,
  },
  listItem: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    fontSize: normalize(20),
    color: '#429321'
  },
  itemImage: {
    width: normalize(20),
    height: normalize(20),
    marginRight: 10,
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Menu)