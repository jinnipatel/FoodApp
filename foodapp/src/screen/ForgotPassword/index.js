import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, InputText, Label } from '../../component'
import { Color } from '../../utils/Color'
import styles from './style'
import * as Animatable from 'react-native-animatable'
import Routes from '../../routes/routes'


export class ForgotPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={[Color.JUNGLE_GREEN,Color.JELLY_BEAN]}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    style={styles.linerGradient}>

                <View style={styles.MainContainer}>
                    <Label></Label>
                </View>        
                <Animatable.View 
                 style={styles.footer}    

                 animation="fadeInUpBig"
                 iterationDelay={400}> 
                <Image source={require("../../assets/Img/forgot-pass.png")} style={{width:100,height:100,marginTop:20,marginLeft:125}}/>  
                <Label xxlarge ms={75} mt={20} mb={10}>Forgot Password</Label>    
                <Label small ms={25}>Enter Your Email For the Verification Process We Will send 4 Digits code to Your Email</Label>
                <View style={{marginTop:20,marginLeft:15}}>
                <InputText name="email" placeholder="Email" />
                </View>
                <View style={{marginTop:20}}>
                <Button name="Continue" onPress={()=>{this.props.navigation.navigate(Routes.OtpScreen)}}/>
                </View>
                </Animatable.View> 
                </LinearGradient>
            </View>
        )
    }
}

export default ForgotPassword
