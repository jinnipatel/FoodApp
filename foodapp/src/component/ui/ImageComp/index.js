import React, { Component } from 'react'
import { Image,  View } from 'react-native'
import CommonStyles from '../../../utils/CommonStyles'
import * as Animatable from 'react-native-animatable'

export class ImageComp extends Component {
    render() {
        return (
            <View>
               <Animatable.Image
                animation="fadeInLeft"
                iterationDelay={400} 
                source={require("../../../assets/Img/foodoorer1.png")}
                style={CommonStyles.logo} />
            </View>
        )
    }
}

export default ImageComp
