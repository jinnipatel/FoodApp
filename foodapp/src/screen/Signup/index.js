import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
 import {InputText} from '../../component/index';
import {PickerExample} from '../../component/index';
import {Button} from '../../component/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './style';
import Routes from '../../routes/routes';
import {validation ,PasswordValidate} from '../../utils/ValidationUtils';

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
      confirmpasswordError :''
    };
  }

  // setData(type, value) {
  //   switch (type) {
  //     case ' firstname':
  //       this.setState({firstname: value});
  //       break;
  //     case 'lastname':
  //       this.setState({lastname: value});
  //       break;
  //   }
  // }
  check_validate = () => {
    let firstnamerror,
      lastnamerror,
      emailError,
      phoneErrorValidation,
      PasswordError,confirmpasswordError,
      isValid;
    firstnamerror = validation('name', this.state.firstname);
    lastnamerror = validation('name', this.state.lastname);
    emailError = validation('email', this.state.email);
    PasswordError = validation('password', this.state.password);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    confirmpasswordError = PasswordValidate(this.state.password,this.state.confirmPassword)
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
        confirmpasswordError : confirmpasswordError
      });
      isValid = false;
    } else {
      this.setState({
        firstnamerror: '',
        lastnamerror: '',
        emailError: '',
        phoneErrorValidation: '',
        PasswordError: '',
        confirmpasswordError : ''
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
//Setkaha kiya h tune confirm password ka ??
// no ku6 nahi kiya tere wait kar rahi thi tu kare fir me karungi....bdiyaa
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
                color="#05375a"
                size={20}
                style={{marginTop: 15}}
              />
              <View style={{flexDirection:'column'}}>
              <InputText
                placeholder="First Name"
                Iconname="person"
                onChangeText={text => this.setState({firstname: text})}
                value={this.state.firstname}
              />
              <Text>{this.state.firstnamerror}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#05375a"
                size={20}
                style={{marginTop: 15}}
              />
              <View style={{flexDirection:'column'}}>
              <InputText
                placeholder="Last Name"
                Iconname="person"
                onChangeText={text => this.setState({lastname: text})}
                value={this.state.lastname}
              />
              <Text>{this.state.lastnamerror}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <Fontisto
                name="email"
                color="#05375a"
                size={20}
                style={{marginTop: 15}}
              />
              <View style={{flexDirection:'column'}}>
              <InputText
                placeholder="Email"
                Iconname="email"
                onChangeText={text => this.setState({email: text})}
                value={this.state.email}
                error={this.state.emailError}
              />
              <Text>{this.state.emailError}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <Feather
                name="phone"
                color="#05375a"
                size={20}
                style={{marginTop: 15}}
              />
              <View style={{flexDirection:'column'}}>
              <InputText
                placeholder="Number"
                Iconname="phone-android"
                onChangeText={text => this.setState({phoneNo: text})}
                value={this.state.phoneNo}
                error={this.state.phoneErrorValidation}
              />
              <Text>{this.state.phoneErrorValidation}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <Feather
                name="lock"
                color="#05375a"
                size={20}
                style={{marginTop: 15}}
              />
              <View style={{flexDirection:'column'}}>
              <InputText
                placeholder="Password"
                Iconname="lock"
                secureTextEntry={true}
                onChangeText={text => this.setState({password: text})}
                value={this.state.password}
                error={this.state.PasswordError}
              />
              <Text>{this.state.PasswordError}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <Feather
                name="lock"
                color="#05375a"
                size={20}
                style={{marginTop: 15}}
              />
              <View style={{flexDirection:'column'}}>
              <InputText
                placeholder="Comfirm Password"
                Iconname="lock"
                secureTextEntry={true}
                value={this.state. confirmPassword}
                onChangeText={text => this.setState({ confirmPassword: text})}
                error={this.state.ConPassword}
              />
              <Text>{this.state.confirmpasswordError}</Text>
              </View>
            </View>
            {/* <View style={styles.action}>
              <Feather
                name="flag"
                color="#05375a"
                size={20}
                style={{marginTop: 15}}
              />
              <PickerExample />
            </View> */}
            <Button name="sign-In" onPress={this.check_validate} />
          </Animatable.View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    );
  }
}
export default Signup;
