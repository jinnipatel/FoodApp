import React, { Component } from 'react'
import { Image,  View } from 'react-native'
import CommonStyles from '../../../utils/CommonStyles'

export class ImageComp extends Component {
    render() {
        return (
            <View>
               <Image source={require("../../../assets/Img/foodoorer1.png")} style={CommonStyles.logo} />
            </View>
        )
    }
}

export default ImageComp
