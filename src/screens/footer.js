import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import normalize from '../helpers/sizeHelper'


const { height, width } = Dimensions.get('window')


const mapDispatchToProps = (dispatch) => {
  return ({
  })
}

const mapStateToProps = (state) => {
  return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading
  })
}



class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <TouchableOpacity onPress={this.props.onPressHome}>
            <Image style={styles.iconImage} source={require('../../assets/icons/home.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.column2}>
          <Image style={styles.iconImage} source={require('../../assets/icons/searcher.png')}></Image>
        </View>
        <View style={styles.column2}>
          <Image style={styles.iconImage} source={require('../../assets/icons/add.png')}></Image>
        </View>
        <View style={styles.column4}>
          <TouchableOpacity onPress={this.props.onPressMenu}>
            <Image style={styles.iconImage} source={require('../../assets/icons/menu.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    )

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#429321'
  },
  column1: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
  },
  column2: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  column3: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  column4: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
  },
  iconImage: {
    width: normalize(24),
    height: normalize(24)
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Footer)