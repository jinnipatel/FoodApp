import React, {Component} from 'react';
import {View, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {ImageComp, InputText, Label, Status} from '../../component/index';
import {Button} from '../../component/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import Routes from '../../routes/routes';
import {validation} from '../../utils/ValidationUtils';
import {Color} from '../../utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CommonStyles from '../../utils/CommonStyles';

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
    };
  }

  check_validate = () => {
    let firstnamerror, emailError, phoneErrorValidation, isValid;
    firstnamerror = validation('name', this.state.firstname);
    emailError = validation('email', this.state.email);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    if (firstnamerror != null || emailError != null || phoneErrorValidation != null) {
      this.setState({
        firstnamerror: firstnamerror,
        emailError: emailError,
        phoneErrorValidation: phoneErrorValidation,
      });
      isValid = false;
    } else {
      this.setState({
        firstnamerror: '',
        emailError: '',
        phoneErrorValidation: '',
      });
      isValid = true;
    }
    if (isValid) {
      let obj = {
        firstname: this.state.firstname,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
      };
      AsyncStorage.setItem('signup_data', JSON.stringify(obj));
      console.log(obj);
      this.props.navigation.navigate(Routes.Login);
    }
  };
  render() {
    return (
      <SafeAreaView style={CommonStyles.container}>
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyles.linerGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <View>
              <Status hidden={true}/>
              <ImageComp />
              <Label xxlarge align="center" mb={15} bolder color={Color.WHITE}>
                Registered Now
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
                    <Label large align="center" bolder color={Color.DARK_MODERATE_BLUE}>
                      Login
                    </Label>
                  </TouchableOpacity>

                  <View style={CommonStyles.bottom_border}>
                    <Label large bolder align="center" color={Color.DARK_BLUE}>
                      SignUp
                    </Label>
                  </View>
                </View>
                <InputText
                  name="person"
                  placeholder="First Name"
                  onChangeText={text => this.setState({firstname: text})}
                  value={this.state.firstname}
                />
                <Label small ms={25} mt={5} color={Color.ERROR}>
                  {this.state.firstnamerror}
                </Label>
                <InputText
                  name="email"
                  placeholder="Email"
                  onChangeText={text => this.setState({email: text})}
                  value={this.state.email}
                  error={this.state.emailError}
                />
                <Label small ms={25} mt={5} color={Color.ERROR}>
                  {this.state.emailError}
                </Label>
                <InputText
                  name="phone-iphone"
                  placeholder="Number"
                  onChangeText={text => this.setState({phoneNo: text})}
                  value={this.state.phoneNo}
                  error={this.state.phoneErrorValidation}
                />

                <Label small ms={25} mt={5} color={Color.ERROR}>
                  {this.state.phoneErrorValidation}
                </Label>
                <View style={{marginTop: 10, paddingBottom: 10}}>
                  <Button name="sign-In" onPress={this.check_validate} />
                </View>
              </Animatable.View>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
export default Signup;
