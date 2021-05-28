import {CommonActions} from '@react-navigation/routers';
import React, {Component} from 'react';
import {Alert, View} from 'react-native';
import {Button, Card, Header, Status} from '../../component/index';
import Routes from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style';

export class Home extends Component {

 componentDidMount(){
   this.fetchAll();
 }

 fetchAll = () =>{
   Alert.alert("hii")
 }
   
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
        <View style={Styles.cardContainer}>
          <Card name="card" label="NewOrder" />
          <Card label="ActiveOrder" />
        </View>

        <View style={Styles.cardContainer}>
          <Card name="card" label="DeliverOrder" />
          <Card label="TotalOrder" />
        </View>

        <View style={Styles.cardContainer}>
          <Card name="card" label="Earning" />
          <Card label="Review" />
        </View>

        <Button name="Logout" onPress={() => this.removeAuthentication()} />
      </View>
    );
  }
}
export default Home;
