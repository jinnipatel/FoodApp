import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import { View} from 'react-native';
import {Button, Header, Loader, RoundButton} from '../../component/index';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Label} from '../../component/index'
import { Color } from '../../utils/Color';



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

      <View>
       <Header onPress={()=>this.props.navigation.openDrawer()}/>
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:50}}>
        <Button buttonText="Logout" onPress={()=>this.removeAuthentication()} />
        <Label color={Color.BLACK}>Hello Jeenni</Label>
        <RoundButton  mt={20}  xsmall >Hello I'm Round Button</RoundButton>
      </View>
      </View>
    );
  }
}

export default Home;
