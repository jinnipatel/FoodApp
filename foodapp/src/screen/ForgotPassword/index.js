import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, ImageComp, InputText, Label, Status} from '../../component';
import {Color} from '../../utils/Color';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import Routes from '../../routes/routes';
import {validation} from '../../utils/ValidationUtils';
import CommonStyles from '../../utils/CommonStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: '',
    };
  }

  check_Validation = () => {
    let emailError;
    let isValid;
    emailError = validation('email', this.state.email);

    if (emailError !== null) {
      console.log('error');
      this.setState({
        emailError: emailError,
      });
      isValid = false;
    } else {
      console.log('done');
      this.setState({
        emailError: '',
      });
      isValid = true;
    }
    if (isValid) {
      this.props.navigation.navigate(Routes.ResetPassword);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyles.linerGradient}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
              enabled={Platform.OS === 'ios' ? true : false}>
              <Status hidden={true} />
              <ImageComp />
              <Animatable.View
                style={CommonStyles.content_container}
                animation="fadeInUpBig"
                iterationDelay={400}>
                {/* <Image source={require("../../assets/Img/forgot-pass.png")} style={{width:100,height:100,marginTop:20,marginLeft:125}}/>   */}
                <Label
                  xlarge
                  bolder
                  mt={10}
                  align="center"
                  color={Color.GREEN_GREEN}>
                  Forgot your Password?
                </Label>
                <Label small mt={10} ms={20} mb={10} color={Color.DARK_GRAY}>
                  Enter Your Email For the Verification Process . We Will send 4
                  Digits code to Your Email
                </Label>

                <InputText
                  name="email"
                  placeholder="Enter Email"
                  onChangeText={text => this.setState({email: text})}
                />

                <Label small ms={30} mb={10} color={Color.ERROR}>
                  {this.state.emailError}
                </Label>

                <View style={{paddingBottom: 10}}>
                  <Button name="Continue" onPress={this.check_Validation} />
                </View>
              </Animatable.View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </View>
    );
  }
}

export default ForgotPassword;
