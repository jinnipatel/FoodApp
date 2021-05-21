import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import { StatusBar, View} from 'react-native';
import {Button, Header, IconButton, Loader, RoundButton, Status, Toast} from '../../component/index';
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
       <Status hidden={false}/>
       <Header onPress={()=>this.props.navigation.openDrawer()}/>
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:50}}>
        <Button buttonText="Logout" onPress={()=>this.removeAuthentication()} />
        <Label color={Color.BLACK}>Hello Jeenni</Label>
        <RoundButton  mt={20}  xsmall >Hello I'm Round Button</RoundButton>
        <IconButton  text="Update"     btn_xl  backgroundColor={Color.PURE_ORANGE} image={require("../../assets/Img/facebook.png") }/>
      </View> 
      </View>
    );
  }
}
export default Home;
