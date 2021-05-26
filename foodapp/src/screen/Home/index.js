import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Card, Header, Status} from '../../component/index';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <Status hidden={true} />
        <Header
          onPress={() => this.props.navigation.openDrawer()}
          Headertext="DashBoard"
          name="menu"
          iconName="notifications"
        />
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <Card name="card" label="NewOrder" />
          <Card label="ActiveOrder" />
        </View>

        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <Card name="card" label="DeliverOrder" />
          <Card label="TotalOrder" />
        </View>

        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <Card name="card" label="Earning" />
          <Card label="Review" />
        </View>

        <Button name="Logout" onPress={() => this.removeAuthentication()} />
      </View>
    );
  }
}
export default Home;
