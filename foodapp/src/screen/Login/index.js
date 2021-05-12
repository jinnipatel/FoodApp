import React, { Component } from 'react'
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import {Button, Label} from '../../component/index'
import {InputText} from '../../component/index'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style'
import Routes from '../../routes/routes';
import { validation } from '../../utils/ValidationUtils';
import { Color } from '../../utils/Color';



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: "",
      PasswordError:""
    }
  }

 checked_filed = () =>{
   let emailError,PasswordError,isValid;
   emailError = validation("email",this.state.email)
   PasswordError = validation("password",this.state.password)
   if(emailError !=null || PasswordError !=null){
     this.setState({
       emailError:emailError,
       PasswordError:PasswordError
     });
     isValid = false
   }
   else{
     this.setState({
       emailError:"",
       PasswordError:""
     })
     isValid=true
   }
   if(isValid){
     let obj = {
         email:this.state.email,
         password:this.state.password
     };
     this.props.navigation.navigate(Routes.Auth,{
       email:this.state.email,
       password:this.state.password
     })
   }
 }

  making_api_call = () => {
    if (this.checked_filed()) {
      this.props.navigation.navigate(Routes.Home)
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor='#0C1B32' barStyle="light-content" />
          <View style={styles.header} >
            {/* <Text style={styles.text_header} > WelCome ! </Text> */}
            <Label xlarge color={Color.WHITE} >WelCome !</Label>
          </View>

          <Animatable.View style={styles.footer}
            animation="fadeInUpBig"
            iterationDelay={400}
          >
            {/* <Text style={styles.text_footer}>Email</Text> */}
            <Label color={Color.BLUE}>Email</Label>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#05375a"
                size={20} style={{ marginTop: 15 }} />
              <View style={{flexDirection:'column'}}>  
              <InputText placeholder="Email"  
              value={this.state.email}
              onChangeText={text=>this.setState({email:text})}/>
              {/* <Text>{this.state.emailError}</Text> */}
              <Label xsmall color={Color.PURE_ORANGE}>{this.state.emailError}</Label>
              </View>
            </View>
            {/* <Text style={styles.text_footer}>Password</Text> */}
            <Label color={Color.BLUE}>Password</Label>
            <View style={styles.action}>
              <Feather
                name="lock"
                color="#05375a"
                size={20}
                style={{ marginTop: 15 }}

              />
              <View style={{flexDirection:'column'}}>
              <InputText placeholder="Password"
                secureTextEntry={true}
                onChangeText={text=>this.setState({password:text})} />
                {/* <Text>{this.state.PasswordError}</Text> */}
                <Label xsmall coloe={Color.PURE_ORANGE}>{this.props.PasswordError}</Label>
                </View> 
            </View>
            <View style={styles.button}>
              <Button
                name="LogIn"
                onPress={this.making_api_call} />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(Routes.Signup)}
                style={styles.signup}>
                <Text style={styles.button_text}>Sign Up</Text>
                {/* <Label xlarge  color={Color.BLUE} >SIGN UP</Label> */}
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </KeyboardAvoidingView>
    )
  }
 }


export default Login
