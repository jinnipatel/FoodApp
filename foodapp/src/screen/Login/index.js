import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  Label,
  Section,
  SocialButton,
  InputText,
} from '../../component/index';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import Routes from '../../routes/routes';
import {validation} from '../../utils/ValidationUtils';
import {Color} from '../../utils/Color';
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      PasswordError: '',
    };
  }

  checked_filed = () => {
    let emailError, PasswordError, isValid;
    emailError = validation('email', this.state.email);
    PasswordError = validation('password', this.state.password);
    if (emailError != null || PasswordError != null) {
      this.setState({
        emailError: emailError,
        PasswordError: PasswordError,
      });
      isValid = false;
    } else {
      this.setState({
        emailError: '',
        PasswordError: '',
      });
      isValid = true;
    }
    if (isValid) {
      this.props.navigation.navigate(Routes.Auth, {
        email: this.state.email,
        // password: this.state.password,
      });
    }
  };

  making_api_call = () => {
    if (this.checked_filed()) {
      this.props.navigation.navigate(Routes.Home);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.Maincontainer}>
        <LinearGradient
          colors={[Color.PALE_VIOLET, Color.LIGHT_ORANGE]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.linerGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> 
              <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
                iterationDelay={400}>
                <Label color={Color.BLACK} mt={20} xxlarge>
                  Welcome
                </Label>
                <Label color={Color.DARK_GRAY} mt={10} mb={10}>
                  Enter Your Email Id To Proceed
                </Label>
                <InputText
                  placeholder="Email"
                  name="email"
                  placeholderTextColor={Color.BLACK}
                  value={this.state.email}
                  onChangeText={text => this.setState({email: text})}
                />
                <View style={{marginLeft: 20}}>
                  <Label xsmall ml={60} color={Color.PURE_ORANGE}>
                    {this.state.emailError}
                  </Label>
                </View>
                <InputText
                  placeholder="Password"
                  name="lock"
                  placeholderTextColor={Color.BLACK}
                  secureTextEntry={true}
                  onChangeText={text => this.setState({password: text})}
                />
                <View style={{marginLeft: 20}}>
                  <Label xsmall color={Color.PURE_ORANGE}>
                    {this.state.PasswordError}
                  </Label>
                </View>
                <View style={styles.button}>
                  <Button name="LogIn" onPress={this.making_api_call} />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-evenly',
                    marginHorizontal:10,
                    justifyContent:'space-around',
                    marginLeft:25,
                    marginTop:20
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(Routes.Signup)
                    } style={{justifyContent:'center',marginRight:75}}>
                    <Label lagre color={Color.DARK_CYAN}>
                      Register Now!
                    </Label>
                  </TouchableOpacity> 
                  <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{this.props.navigation.navigate(Routes.ForgotPassword)}}>
                    <Label lagre color={Color.DARK_CYAN}>
                      Forgot Password?
                    </Label>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop:10,paddingBottom:10}}>
                  <Section />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                  <SocialButton
                    btntext="FaceBook"
                    source={require('../../assets/Img/facebook.png')}
                  />
                  <SocialButton
                    btntext="Google"
                    source={require('../../assets/Img/google.png')}
                  />
                </View>
              </Animatable.View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

export default Login;
