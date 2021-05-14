import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {InputText, Label} from '../../component/index';
import {PickerExample} from '../../component/index';
import {Button} from '../../component/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './style';
import Routes from '../../routes/routes';
import {validation, PasswordValidate} from '../../utils/ValidationUtils';
import {Color} from '../../utils/Color';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      firstnamerror: '',
      lastname: '',
      lastnamerror: '',
      email: '',
      emailError: '',
      phoneNo: '',
      phoneErrorValidation: '',
      password: '',
      PasswordError: '',
      confirmPassword: '',
      ConPassword: '',
      confirmpasswordError: '',
    };
  }

  check_validate = () => {
    let firstnamerror,
      lastnamerror,
      emailError,
      phoneErrorValidation,
      PasswordError,
      confirmpasswordError,
      isValid;
    firstnamerror = validation('name', this.state.firstname);
    lastnamerror = validation('name', this.state.lastname);
    emailError = validation('email', this.state.email);
    PasswordError = validation('password', this.state.password);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    confirmpasswordError = PasswordValidate(
      this.state.password,
      this.state.confirmPassword,
    );
    if (
      firstnamerror != null ||
      lastnamerror != null ||
      emailError != null ||
      PasswordError != null ||
      confirmpasswordError != null
    ) {
      this.setState({
        firstnamerror: firstnamerror,
        lastnamerror: lastnamerror,
        emailError: emailError,
        PasswordError: PasswordError,
        phoneErrorValidation: phoneErrorValidation,
        confirmpasswordError: confirmpasswordError,
      });
      isValid = false;
    } else {
      this.setState({
        firstnamerror: '',
        lastnamerror: '',
        emailError: '',
        phoneErrorValidation: '',
        PasswordError: '',
        confirmpasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      let obj = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
      };
      AsyncStorage.setItem('signup_data', JSON.stringify(obj));
      console.log(obj);
      this.props.navigation.navigate(Routes.Login);
    }
  };
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#0C1B32" barStyle="light-content" />
            <View style={styles.header}>
              <Text style={styles.text_header}> Register Now! </Text>
            </View>
            <Animatable.View
              style={styles.footer}
              animation="fadeInUpBig"
              iterationDelay={400}>
              <View style={styles.action}>
                <FontAwesome
                  name="user-o"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                />
                <InputText
                  placeholder="First Name"
                  // Iconname="person"
                  placeholderTextColor={Color.BLACK}
                  onChangeText={text => this.setState({firstname: text})}
                  value={this.state.firstname}
                />
              </View>
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.firstnamerror}
                </Label>
              </View>

              <View style={styles.action}>
                <FontAwesome
                  name="user-o"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                />

                <InputText
                  placeholder="Last Name"
                  // Iconname="person"
                  placeholderTextColor={Color.BLACK}
                  onChangeText={text => this.setState({lastname: text})}
                  value={this.state.lastname}
                />
              </View>
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.lastnamerror}
                </Label>
              </View>

              <View style={styles.action}>
                <Fontisto
                  name="email"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                />

                <InputText
                  placeholder="Email"
                  // Iconname="email"
                  placeholderTextColor={Color.BLACK}
                  onChangeText={text => this.setState({email: text})}
                  value={this.state.email}
                  error={this.state.emailError}
                />
              </View>
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.emailError}
                </Label>
              </View>

              <View style={styles.action}>
                <Feather
                  name="phone"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                />

                <InputText
                  placeholder="Number"
                  Iconname="phone-android"
                  placeholderTextColor={Color.BLACK}
                  onChangeText={text => this.setState({phoneNo: text})}
                  value={this.state.phoneNo}
                  error={this.state.phoneErrorValidation}
                />
              </View>
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.phoneErrorValidation}
                </Label>
              </View>

              <View style={styles.action}>
                <Feather
                  name="lock"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                />

                <InputText
                  placeholder="Password"
                  Iconname="lock"
                  placeholderTextColor={Color.BLACK}
                  secureTextEntry={true}
                  onChangeText={text => this.setState({password: text})}
                  value={this.state.password}
                  error={this.state.PasswordError}
                />
              </View>
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.PasswordError}
                </Label>
              </View>

              <View style={styles.action}>
                <Feather
                  name="lock"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                />

                <InputText
                  placeholder="Comfirm Password"
                  Iconname="lock"
                  placeholderTextColor={Color.BLACK}
                  secureTextEntry={true}
                  value={this.state.confirmPassword}
                  onChangeText={text => this.setState({confirmPassword: text})}
                  error={this.state.ConPassword}
                />
              </View>
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.confirmpasswordError}
                </Label>
              </View>

              <View style={styles.action}>
                <Feather
                  name="flag"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                />
                <PickerExample />
              </View>
              <View style={{marginTop: 20}}>
                <Button name="sign-In" onPress={this.check_validate} />
              </View>
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
export default Signup;
