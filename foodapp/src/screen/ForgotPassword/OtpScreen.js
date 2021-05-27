import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Label, Button} from '../../component';
import {Color} from '../../utils/Color';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Routes from '../../routes/routes';
export class OtpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Color.JUNGLE_GREEN, Color.JELLY_BEAN]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.linerGradient}>
          <View style={styles.MainContainer}></View>
          <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
            iterationDelay={400}>
            {/* <Image
              source={require('../../assets/Img/forgot-pass.png')}
              style={{width: 100, height: 100, marginTop: 20, marginLeft: 125}}
            /> */}
            <Label xlarge ms={20}>
              Enter Verification Code
            </Label>
            <Label ms={20} mt={20} large>
              Please wait email delivery somtimes take of 2 to 5
            </Label>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 30,
              }}>
              <TextInput
                style={{
                  maxHeight: 50,
                  width: 50,
                  borderWidth: 2,
                  borderRadius: 15,
                }}
              />
              <TextInput
                style={{
                  maxHeight: 50,
                  width: 50,
                  borderWidth: 2,
                  borderRadius: 15,
                }}
              />
              <TextInput
                style={{
                  maxHeight: 50,
                  width: 50,
                  borderWidth: 2,
                  borderRadius: 15,
                }}
              />
              <TextInput
                style={{
                  maxHeight: 50,
                  width: 50,
                  borderWidth: 2,
                  borderRadius: 15,
                }}
              />
            </View>
            <View style={{marginTop: 20}}>
              {/* <Button name="Continue" onPress={()=>{this.props.navigation.navigate(Routes.ResetPassword)}}/> */}
            </View>
          </Animatable.View>
        </LinearGradient>
      </View>
    );
  }
}

export default OtpScreen;
