import React, {Component} from 'react';
import {TouchableOpacity,View, Text,Image} from 'react-native';
import Label from '../Label';
import styles from './style';

export default class SocialButton extends Component {
  render() {
    return (
     
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Image source={this.props.source} style={styles.image}/>
        <Label style={styles.text}>{this.props.btntext}</Label>
      </TouchableOpacity>
    );
  }
}
