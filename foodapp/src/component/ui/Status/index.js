import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';

export class Status extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={this.props.hidden} />
      </View>
    );
  }
}

export default Status;
