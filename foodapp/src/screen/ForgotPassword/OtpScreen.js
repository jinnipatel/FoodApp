import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Label } from '../../component'
import { Color } from '../../utils/Color'
import styles from './style'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Routes from '../../routes/routes'
export class OtpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               <LinearGradient
               colors={[Color.JUNGLE_GREEN,Color.JELLY_BEAN]}
               start={{x:0,y:1}}
               end={{x:1,y:0}}
               style={styles.linerGradient}
            >
                <View style={styles.MainContainer}>
                  
                </View>
                <Animatable.View style={styles.footer}
                  animation="fadeInUpBig"
                  iterationDelay={400} >
                    <Image source={require("../../assets/Img/forgot-pass.png")} style={{width:100,height:100,marginTop:20,marginLeft:125}}/>
                    <Label large ms={20}>Enter Verification Code</Label>
                    <Label  ms={20} mt={20} >Please wait email delivery somtimes take of 2 to 5</Label>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:75}}>
                        <Label>_____</Label>
                        <Label>_____</Label>
                        <Label>_____</Label>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate(Routes.ResetPassword)}}>
                        <Label>_____</Label>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center',alignSelf:'center',marginTop:40}}>
                    <Label large color={Color.MEDIUM_DARK_BLUE}>Resend OTP</Label>
                    </View>
                </Animatable.View>

               </LinearGradient>
            </View>
        )
    }
}

export default OtpScreen
