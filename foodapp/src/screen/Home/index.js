import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import { View} from 'react-native';
import {Button} from '../../component/index';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Label} from '../../component/index'

export class Home extends Component {

  
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
        <Button buttonText="Logout" onPress={()=>this.removeAuthentication()} />
        <Label>Hello Jeenni</Label>
      </View>
    );
  }
}

export default Home;
