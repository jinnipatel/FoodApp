import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ButtonComp from '../../component/ButtonComp';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage'

export class Home extends Component {

    // componentDidMount() {
    //     this.data()
    // }

    // data = async () => {
    //     var user = await AsyncStorage.getItem('signup_data')
    //     var parsed = JSON.parse(user)
    //     this.setState({ firstName: parsed.firstName, lastName: parsed.lastName, email: parsed.email, phone: parsed.phone })
    //     AsyncStorage.setItem('signup_data', JSON.stringify(user));

    // }
  resetStack = CommonActions.reset({
    index: 0,
    routes: [{name: Routes.SplashScreen}],
  });
  removeAuthentication = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();
      this.props.navigation.dispatch(this.resetStack);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Home </Text>
        <ButtonComp buttonText="Logout" onPress={()=>this.removeAuthentication()} />
      </View>
    );
  }
}

export default Home;
