import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../utils/Color';
import Label from '../Label';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon name={this.props.name} size={35} color={Color.WHITE} />
          </TouchableOpacity>
          <Label style={styles.text}>{this.props.Headertext}</Label>
          <Icon name={this.props.iconName} size={30} color={Color.WHITE} />
        </View>
      </View>
    );
  }
}

export default Header;
