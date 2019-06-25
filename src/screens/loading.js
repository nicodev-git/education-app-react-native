import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, Modal } from 'react-native'

import normalize from '../helpers/sizeHelper'


const { height, width } = Dimensions.get('window')


class Loading extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    return (
      <Modal
        transparent={true}
        animationType={'fade'}
        visible={this.props.show}
        onRequestClose={this.props.closeLoading}
      >
        <View style={styles.screen}>
          <Image style={styles.loadingImage} source={require('../../assets/icons/loading.gif')}></Image>
          {/* <Text style={styles.label}>{this.props.label}...</Text> */}
        </View>
      </Modal>
    )

  }

}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: normalize(24),
    color: '#42c000',
    textAlign: 'center',
    margin: 15
  },
  loadingImage: {
    width: width/2,
    height: width/2
  }
})



export default Loading