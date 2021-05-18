import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, InputText, Label } from '../../component'
import { Color } from '../../utils/Color'
import styles from './style'


export class ForgotPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    style={styles.linerGradient}>
                <View >       
                <Label>Enter Your Email For the Verification Process We Will send 4 Digits code to Your Email</Label>
                <InputText name="email" placeholder="Email" />
                <Button name="Continue"/>
                </View> 
                </LinearGradient>
            </View>
        )
    }
}

export default ForgotPassword
