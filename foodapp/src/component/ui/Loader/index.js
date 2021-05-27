import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

export class Loader extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={this.props.size} color={this.props.color} />
      </View>
    );
  }
}

export default Loader;
