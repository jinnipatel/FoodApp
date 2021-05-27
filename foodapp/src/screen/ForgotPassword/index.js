import React, {Component} from 'react';
import {View, KeyboardAvoidingView, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, ImageComp, InputText, Label, Status} from '../../component';
import {Color} from '../../utils/Color';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import Routes from '../../routes/routes';
import {validation} from '../../utils/ValidationUtils';
import CommonStyles from '../../utils/CommonStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: '',   //jhgdjajah
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
          <KeyboardAwareScrollView
            style={{flex: 1}}
            resetScrollToCoords={{x: 0, y: 0}}
            scrollEnabled={true}
            enableResetScrollToCoords={false}
            keyboardVerticalOffset={0}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="always">
            <Status hidden={true} />
            <View style={{marginBottom: 20}}>
              <ImageComp />
            </View>
            <Animatable.View
              style={CommonStyles.content_container}
              animation="fadeInUpBig"
              iterationDelay={400}>
              <Label
                xlarge
                bolder
                mt={10}
                align="center"
                color={Color.PRIMARY_DARK}>
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
          </KeyboardAwareScrollView>
        </LinearGradient>
      </View>
    );
  }
}

export default ForgotPassword;
