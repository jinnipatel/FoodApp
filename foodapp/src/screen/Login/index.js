import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  Label,
  Section,
  SocialButton,
  InputText,
  ImageComp,
  Status,
} from '../../component/index';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import Routes from '../../routes/routes';
import {validation} from '../../utils/ValidationUtils';
import {Color} from '../../utils/Color';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from '../../utils/CommonStyles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      PasswordError: '',
      toggleIcon: 'eye-closed',
      isSecurePaswword: true,
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

  IconToggle = () => {
    this.state.isSecurePaswword
      ? this.setState({isSecurePaswword: false, toggleIcon: 'eye'})
      : this.setState({isSecurePaswword: true, toggleIcon: 'eye-closed'});
  };

  render() {
    return (
      <SafeAreaView style={CommonStyles.container}>
        <Status hidden={true}/>
        <LinearGradient
          colors={[Color.GRADIENT3, Color.GRADIENT4]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={CommonStyles.linerGradient}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}>
            <ImageComp />
            <Label color={Color.WHITE} ms={130} mb={10} bolder xxlarge>
              Welcome
            </Label>

            <Animatable.View
              style={CommonStyles.content_container}
              animation="fadeInUpBig"
              iterationDelay={400}>
              <View style={CommonStyles.login_signup_container}>
                <View style={CommonStyles.bottom_border}>
                  <Label xlarge ms={35} color={Color.DARK_BLUE}>
                    Login
                  </Label>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.push(Routes.Signup);
                  }}>
                  <Label xlarge ms={30} color={Color.DARK_MODERATE_BLUE}>
                    SignUp
                  </Label>
                </TouchableOpacity>
              </View>

              <InputText
                placeholder="Email"
                name="email"
                // placeholderTextColor={Color.BLACK}
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <Label xsmall ms={20} color={Color.PURE_ORANGE}>
                {this.state.emailError}
              </Label>
              <InputText
                placeholder="Password"
                name="lock"
                // placeholderTextColor={Color.BLACK}
                secureTextEntry={this.state.isSecurePaswword}
                onChangeText={text => this.setState({password: text})}
                closeColor={Color.GREEN_GREEN}
                IconName={this.state.toggleIcon}
                onToggle={() => this.IconToggle()}
              />

              <Label xsmall ms={20} mt={10} color={Color.PURE_ORANGE}>
                {this.state.PasswordError}
              </Label>

              <View style={styles.button}>
                <Button name="LogIn" onPress={this.making_api_call} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-evenly',
                  marginHorizontal: 10,
                  justifyContent: 'space-around',
                  marginLeft: 0,
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(Routes.ForgotPassword)
                  }>
                  <Label mt={5} ms={170} lagre color={Color.DARK_BLUE}>
                    Forgot Password?
                  </Label>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 5, paddingBottom: 5}}>
                <Section />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  paddingBottom: 15,
                }}>
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
