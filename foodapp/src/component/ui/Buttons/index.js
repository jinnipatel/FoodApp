import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'


export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity  style={{alignItems:'center'}} onPress={this.props.onPress}>
        <LinearGradient colors={['#00d2ff', '#182b56']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
          <Text style={styles.text} >{this.props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}



