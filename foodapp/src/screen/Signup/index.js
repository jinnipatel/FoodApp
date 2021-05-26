import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {ImageComp, InputText, Label, Status} from '../../component/index';
import {Button} from '../../component/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import Routes from '../../routes/routes';
import {validation, PasswordValidate} from '../../utils/ValidationUtils';
import {Color} from '../../utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import {
  TouchableOpacity,
} from 'react-native-gesture-handler';
import CommonStyles from '../../utils/CommonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      firstnamerror: '',
      email: '',
      emailError: '',
      phoneNo: '',
      phoneErrorValidation: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      ConfirmPasswordError: '',
      toggleIcon1: 'eye-closed',
      toggleIcon: 'eye-closed',
      isSecurePassword: true,
      isConformPassword: true,
    };
  }

  check_validate = () => {
    let firstnamerror,
      emailError,
      phoneErrorValidation,
      passwordError,
      confirmpasswordError,
      isValid;
    firstnamerror = validation('name', this.state.firstname);
    emailError = validation('email', this.state.email);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    passwordError = validation('password', this.state.password);
    confirmpasswordError = PasswordValidate(
      this.state.password,
      this.state.confirmPassword,
    );
    if (
      firstnamerror != null ||
      emailError != null ||
      phoneErrorValidation != null ||
      passwordError != null ||
      confirmpasswordError != null
    ) {
      this.setState({
        firstnamerror: firstnamerror,
        emailError: emailError,
        phoneErrorValidation: phoneErrorValidation,
        passwordError: passwordError,
        confirmpasswordError: confirmpasswordError,
      });
      isValid = false;
    } else {
      this.setState({
        firstnamerror: '',
        emailError: '',
        phoneErrorValidation: '',
        passwordError: '',
        confirmpasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      let obj = {
        firstname: this.state.firstname,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      };
      AsyncStorage.setItem('signup_data', JSON.stringify(obj));
      alert('SignUp SuccessFully Completed');
      this.props.navigation.navigate(Routes.Login);
    }
  };

  IconToggle = () => {
    this.state.isSecurePassword
      ? this.setState({isSecurePassword: false, toggleIcon: 'eye'})
      : this.setState({isSecurePassword: true, toggleIcon: 'eye-closed'});
  };

  conformToggle = () => {
    this.state.isConformPassword
      ? this.setState({isConformPassword: false, toggleIcon1: 'eye'})
      : this.setState({isConformPassword: true, toggleIcon1: 'eye-closed'});
  };

  render() {
    return (
      <SafeAreaView style={CommonStyles.container}>
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
            <View>
              <Status hidden={true} />
              <ImageComp />
              <Label xxlarge align="center" mb={10} bolder color={Color.WHITE}>
                Welcome To All
              </Label>

              <Animatable.View
                style={CommonStyles.content_container}
                animation="fadeInUpBig"
                iterationDelay={400}>
                <View style={CommonStyles.login_signup_container}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.push(Routes.Login);
                    }}>
                    <Label
                      large
                      align="center"
                      bolder
                      color={Color.DARK_MODERATE_BLUE}>
                      Login
                    </Label>
                  </TouchableOpacity>

                  <View style={CommonStyles.bottom_border}>
                    <Label large bolder align="center" color={Color.DARK_BLUE}>
                      SignUp
                    </Label>
                  </View>
                </View>

                <View>
                  <InputText
                    name="person"
                    placeholder="Enter Name"
                    onChangeText={text => this.setState({firstname: text})}
                    value={this.state.firstname}
                  />
                  <Label small ms={25} color={Color.ERROR}>
                    {this.state.firstnamerror}
                  </Label>
                  <InputText
                    name="email"
                    placeholder="Enter Email"
                    onChangeText={text => this.setState({email: text})}
                    value={this.state.email}
                    error={this.state.emailError}
                    keyboardType="email-address"
                  />
                  <Label small ms={25} color={Color.ERROR}>
                    {this.state.emailError}
                  </Label>
                  <InputText
                    name="phone-iphone"
                    placeholder="Enter Number"
                    onChangeText={text => this.setState({phoneNo: text})}
                    value={this.state.phoneNo}
                    error={this.state.phoneErrorValidation}
                    keyboardType="phone-pad"
                  />
                  <Label small ms={25} color={Color.ERROR}>
                    {this.state.phoneErrorValidation}
                  </Label>

                  <InputText
                    name="lock"
                    placeholder="Enter Password"
                    secureTextEntry={this.state.isSecurePassword}
                    onChangeText={text => {
                      this.setState({password: text});
                    }}
                    closeColor={Color.GREEN_GREEN}
                    IconName={this.state.toggleIcon}
                    onToggle={() => this.IconToggle()}
                  />

                  <Label small color={Color.ERROR} ms={30}>
                    {this.state.passwordError}
                  </Label>
                  <InputText
                    placeholder="Re-type Password"
                    secureTextEntry={this.state.isConformPassword}
                    name="lock"
                    onChangeText={text => {
                      this.setState({confirmPassword: text});
                    }}
                    closeColor={Color.GREEN_GREEN}
                    IconName={this.state.toggleIcon1}
                    onToggle={() => this.conformToggle()}
                  />

                  <Label small color={Color.ERROR} ms={30}>
                    {this.state.confirmpasswordError}
                  </Label>
                </View>
                <View style={{marginTop: 10, paddingBottom: 10}}>
                  <Button name="sign-In" onPress={this.check_validate} />
                </View>
              </Animatable.View>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
export default Signup;
