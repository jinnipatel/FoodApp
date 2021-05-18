import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Color } from '../../utils/Color'
import styles from './style'

export class ResetPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient 
                 colors={[Color.JUNGLE_GREEN,Color.JELLY_BEAN]}
                 start={{x:0,y:1}}
                 end={{x:1,y:0}}
                 style= {styles.linerGradient}>

      
                </LinearGradient>
            </View>
        )
    }
}

export default ResetPassword
