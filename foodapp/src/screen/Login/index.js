import React, { Component } from 'react'
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import ButtonComp from '../../component/ButtonComp'
import InputText from '../../component/InputText'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style'
import Routes from '../../routes/routes';





// const UserInfo = { Email: 'jinni21@gmail.com', password: '12345' }

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      isEmailValidate: false,
    }
  }



  checked_filed = () => {
    const { email, password } = this.state
    if (email == "") {
      alert("please fill email ")
      return false;
    } else if (password == "") {
      alert("please fill password")
      return false;
    }
    return true;
  }

  making_api_call = () => {
    if (this.checked_filed()) {
      // alert("SuccessFully login")
      // navigation.navigate("Home")
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
              <InputText placeholder="Email" onChangeText={(value) => { this.validate(value) }} value={this.state.Email} />
              {this.state.isEmailvalidate ? (
                <Text style={{ color: 'green' }}>
                  {this.state.emailError}
                </Text>
              ) : (
                <Text style={{ color: 'green' }}>{this.state.emailError}</Text>
              )}
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
                onChangeText={(value) => this.setState({ password: value })}
                value={this.state.password} />
            </View>
            {/* <ButtonComp name="Signup" onPress={() => this.props.navigation.navigate('Signup')} />  */}
            <View style={styles.button}>
              <ButtonComp
                name="LogIn"
                onPress={() => this.props.navigation.navigate(Routes.Auth, {
                  email: this.state.email,
                  password: this.state.password
                })} />
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

  validate = (value) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(value) === false) {
      console.log('Email is not Correct');
      this.setState({ email: value, emailError: 'Email is not correct' })
      return false;
    } else {
      this.setState({ email: value, emailError: 'Email is Correct' })
      console.log('Email is correct')
    }
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#009387'
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingBottom: 50
//   },
//   footer: {
//     flex: 3,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start'
//   },
//   text_header: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 30
//   },
//   text_footer: {
//     color: '#05375a',
//     fontSize: 18,

//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5,
//   },
//   button: {
//     alignItems: 'center',
//     marginTop: 5
//   },
//   signup: {
//     width: 325,
//     height: 45,
//     marginLeft: 15,
//     borderColor: '#009387',
//     borderWidth: 1,
//     marginTop: 15,
//     borderRadius: 5,
//   },
//   button_text: {
//     textAlign: 'center',
//     color: '#009387',
//     fontSize: 20,
//     marginTop: 5,
//     fontWeight: 'bold'

//   }
// })
export default Login
