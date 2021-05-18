import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
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
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      firstnamerror: '',
      // lastname: '',
      // lastnamerror: '',
      email: '',
      emailError: '',
      phoneNo: '',
      phoneErrorValidation: '',
      // password: '',
      // PasswordError: '',
      // confirmPassword: '',
      // ConPassword: '',
      // confirmpasswordError: '',
    };
  }

  check_validate = () => {
    let firstnamerror,
      // lastnamerror,
      emailError,
      phoneErrorValidation,
      // PasswordError,
      // confirmpasswordError,
      isValid;
    firstnamerror = validation('name', this.state.firstname);
    // lastnamerror = validation('name', this.state.lastname);
    emailError = validation('email', this.state.email);
    // PasswordError = validation('password', this.state.password);
    phoneErrorValidation = validation('phoneNo', this.state.phoneNo);
    // confirmpasswordError = PasswordValidate(
    //   this.state.password,
    //   this.state.confirmPassword,
    // );
    if (
      firstnamerror != null ||
      // lastnamerror != null ||
      emailError != null 
      // PasswordError != null ||
      // confirmpasswordError != null
    ) {
      this.setState({
        firstnamerror: firstnamerror,
        // lastnamerror: lastnamerror,
        emailError: emailError,
        // PasswordError: PasswordError,
        phoneErrorValidation: phoneErrorValidation,
        // confirmpasswordError: confirmpasswordError,
      });
      isValid = false;
    } else {
      this.setState({
        firstnamerror: '',
        // lastnamerror: '',
        emailError: '',
        phoneErrorValidation: '',
        // PasswordError: '',
        // confirmpasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      let obj = {
        firstname: this.state.firstname,
        // lastname: this.state.lastname,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        // password: this.state.password,
      };
      AsyncStorage.setItem('signup_data', JSON.stringify(obj));
      console.log(obj);
      this.props.navigation.navigate(Routes.Login);
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.MainContainer}>
   
      <LinearGradient
          colors={[Color.JUNGLE_GREEN, Color.JELLY_BEAN]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.linerGradient}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View>
            <Animatable.View
              style={styles.footer}
              animation="fadeInUpBig"
              iterationDelay={400}>
             
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                  <TouchableOpacity onPress={()=>{this.props.navigation.push(Routes.Login)}}>
                  <Label xlarge ms={35} color={Color.DARK_BLUE}>Login</Label>
                  </TouchableOpacity>
                  <View style={{borderBottomWidth:4,borderBottomColor:"#62b34c",width:"40%", paddingBottom:10}}>
                  <Label xlarge ms={30} color={Color.DARK_MODERATE_BLUE} >SignUp</Label>
                  </View>
                </View>
                 
                {/* <FontAwesome
                  name="user-o"
                  color={Color.BLUE}
                  size={20}
                  style={{alignSelf: 'center', marginStart: 20}}
                /> */}
               <Label xxlarge  mt={20} bold  color={Color.DARK_MODERATE_BLUE}> Registered Now</Label>

                <View style={{marginTop:25}}>
                <InputText
                  name="person"
                  placeholder="First Name"
                  placeholderTextColor={Color.BLACK}
                  onChangeText={text => this.setState({firstname: text})}
                  value={this.state.firstname}
                />
             
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.firstnamerror}
                </Label>
              </View>

              {/* <View style={styles.action}>
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
              </View> */}
              {/* <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.lastnamerror}
                </Label>
              </View> */}

          

                <InputText
                  name="email"
                  placeholder="Email"
                  placeholderTextColor={Color.BLACK}
                  onChangeText={text => this.setState({email: text})}
                  value={this.state.email}
                  error={this.state.emailError}
                />
          
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.emailError}
                </Label>
              </View>

              
      
                <InputText
                  name="phone-iphone"
                  placeholder="Number"
                  placeholderTextColor={Color.BLACK}
                  onChangeText={text => this.setState({phoneNo: text})}
                  value={this.state.phoneNo}
                  error={this.state.phoneErrorValidation}
                />
            
              <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.phoneErrorValidation}
                </Label>
              </View>

             
                {/* <InputText
                  placeholder="Password"
                  Iconname="lock"
                  placeholderTextColor={Color.BLACK}
                  secureTextEntry={true}
                  onChangeText={text => this.setState({password: text})}
                  value={this.state.password}
                  error={this.state.PasswordError}
                />
            */}
              {/* <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.PasswordError}
                </Label>
              </View> */}

              {/* <View style={styles.action}>
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
              </View> */}
              {/* <View style={styles.error_section}>
                <Label xsmall color={Color.PURE_ORANGE}>
                  {this.state.confirmpasswordError}
                </Label>
              </View> */}
              <View style={{marginTop: 20}}>
                <Button name="sign-In" onPress={this.check_validate} />
              </View>
              <View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.push(Routes.Login)}>
                <Label color={Color.DARK_CYAN}>Already have account ? Login</Label>
                </TouchableOpacity>
              </View>
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
