import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image } from 'react-native'

import Label from '../Label';
import {Styles} from './style';
import {Color, ThemeUtils} from '../../../utils';

export default class CardComponent extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={[Styles.card,this.props.style]} onPress={this.props.onPress}>
                  <View>
              <Image
                style={[Styles.img,this.props.imgstyle,]}
                resizeMode="contain"
                source={this.props.img}
              />
              </View>
              <Label color={this.props.labelColor} style={{fontWeight:"600"}} small mt={ThemeUtils.relativeHeight(1)}>
               {this.props.label}
              </Label>
            </TouchableOpacity>
            </View>
        )
    }
}


