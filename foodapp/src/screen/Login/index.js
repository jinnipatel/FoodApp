import React, { Component } from 'react'
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import ButtonComp from '../../component/ui/Buttons/ButtonComp'
import InputText from '../../component/ui/InputText/InputText'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style'
import Routes from '../../routes/routes';
import { validation } from '../../utils/ValidationUtils';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: "",
      PasswordError:""
      // isEmailValidate: false,
    }
  }


  checked_filed = () => {
    const { email, password,emailError } = this.state
    if (email == "" || password == "") {
      alert("please fill email && password ")
      return false;
    } else if (emailError != null) {
      alert(emailError)
       this.props.navigation.navigate(Routes.Login)
    }else{
      this.props.navigation.navigate(Routes.Auth, {
        email: this.state.email,
        password: this.state.password
      });
    }
    return true;
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
            <Text style={styles.text_header} > WelCome ! </Text>
          </View>

          <Animatable.View style={styles.footer}
            animation="fadeInUpBig"
            iterationDelay={400}
          >
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#05375a"
                size={20} style={{ marginTop: 15 }} />
              <InputText placeholder="Email"  
              value={this.state.email}
              onChangeText={text=>{this.setState({email:text,emailError:validation("email",this.state.email)})}}  />
              <Text>{this.state.emailError}</Text>
              {/* {this.state.isEmailvalidate ? (
                <Text style={{ color: 'green' }}>
                  {this.state.emailError}
                </Text>
              ) : (
                <Text style={{ color: 'green' }}>{this.state.emailError}</Text>
              )} */}
            </View>
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
              <Feather
                name="lock"
                color="#05375a"
                size={20}
                style={{ marginTop: 15 }}

              />
              <InputText placeholder="Password"
                secureTextEntry={true}
                onChangeText={text=>{this.setState({password:text,PasswordError:validation("password",this.state.password)})}}
                value={this.state.password} />
            </View>
            {/* <ButtonComp name="Signup" onPress={() => this.props.navigation.navigate('Signup')} />  */}
            <View style={styles.button}>
              <ButtonComp
                name="LogIn"
                onPress={this.making_api_call} />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(Routes.Signup)}
                style={styles.signup}>
                <Text style={styles.button_text}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>


      </KeyboardAvoidingView>
    )
  }

  // validate = (value) => {
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(value) === false) {
  //     console.log('Email is not Correct');
  //     this.setState({ email: value, emailError: 'Email is not correct' })
  //     return false;
  //   } else {
  //     this.setState({ email: value, emailError: 'Email is Correct' })
  //     console.log('Email is correct')
  //   }
  // }
 }


export default Login
