import React, {Component} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
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
// import {getUser} from '../../redux/reducers/Login/action'
import {getUser} from '../../redux/reducers/Login/action'
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from '../../utils/CommonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

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

  

  fetchAll = (param)=>{
    // this.props.getUser(param)
    this.props.getUser(param)
  }

  loginUserRequest = async () =>{
    console.log("login User Clicked")

    const {email,password} = this.state;
    this.setState({visibility:true},()=>{
      let param = {
        email:email,
        password:password,
        app_type:'parent'
      }
      this.fetchAll(param)
      console.log()
    })
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
    if(isValid){
      this.loginUserRequest();
      this.props.navigation.navigate(Routes.Auth, {
            email: this.state.email,
            password: this.state.password,
          });
      // this.props.navigation.navigate(Routes.Home)
    }
    // if (isValid) {
    //   this.props.navigation.navigate(Routes.Auth, {
    //     email: this.state.email,
    //     password: this.state.password,
    //   });
    // }
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
        <Status hidden={true} />
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
            <View style={{marginTop: 20}}>
              <ImageComp />
            </View>
            <Label color={Color.WHITE} mb={10} align="center" bolder xxlarge>
              Welcome
            </Label>

            <Animatable.View
              style={CommonStyles.content_container}
              animation="fadeInUpBig"
              iterationDelay={400}>  
              <View style={CommonStyles.login_signup_container}>
                <View style={CommonStyles.bottom_border}>
                  <Label large align="center" bolder color={Color.ACTIVE_COLOR}>
                    Login
                  </Label>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.push(Routes.Signup);
                  }}>
                  <Label
                    large
                    align="center"
                    bolder
                    color={Color.INACTIVE_COLOR}>
                    SignUp
                  </Label>
                </TouchableOpacity>
              </View>

              <InputText
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
                keyboardType="email-address"
              />
              <Label small ms={20} color={Color.ERROR}>
                {this.state.emailError}
              </Label>
              <InputText
                placeholder="Enter Password"
                name="lock"
                value={this.state.password}
                secureTextEntry={this.state.isSecurePaswword}
                onChangeText={text => this.setState({password: text})}
                closeColor={Color.PRIMARY_DARK}
                IconName={this.state.toggleIcon}
                onToggle={() => this.IconToggle()}
              />

              <Label small ms={20} mb={10} color={Color.ERROR}>
                {this.state.PasswordError}
              </Label>

              <View style={styles.button}>
                <Button name="LogIn" onPress={this.making_api_call} />
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(Routes.ForgotPassword)
                }
                style={{marginTop: 10, alignSelf: 'flex-end'}}>
                <Label align="right" lagre color={Color.ACTIVE_COLOR}>
                  Forgot Password?
                </Label>
              </TouchableOpacity>
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
                  source={require('../../assets/Img/facebook_logo.png')}
                />
                <SocialButton
                  btntext="Google"
                  source={require('../../assets/Img/google_logo.png')}
                />
              </View>
            </Animatable.View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return{
    data:state.login,
  }
  
}
  

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    getUser,
  },
  dispatch,)

export default connect(mapStateToProps,mapDispatchToProps)(Login);
