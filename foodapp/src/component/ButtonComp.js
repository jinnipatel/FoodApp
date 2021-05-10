import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


export default class ButtonComp extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <LinearGradient colors={['#0C1B32', '#01ab9d']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
          <Text style={styles.text} >{this.props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    width: 325,
    height: 45,
    marginLeft: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  // signIn: {
  //   width: 500,
  //   height: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10
  // },
})


