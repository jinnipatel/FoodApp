import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Card, Header, InputText, Label} from '../../component';
import Routes from '../../routes/routes';
import {Color, ThemeUtils} from '../../utils';
import Styles from './style';

export class Profile extends Component {
  render() {
    return (
      <View style={Styles.MainConatiner}>
        <Header
          name="chevron-back"
          iconName="notifications"
          Headertext="Profile"
          onPress={() => this.props.navigation.push(Routes.Home)}
        />
        <View style={Styles.HeaderContainer}>
          <Image
            source={require('../../assets/Img/profile_logo.png')}
            style={Styles.image}
          />
          <Label mt={15} mb={15} color={Color.WHITE}>
            JOHN DOE
          </Label>
        </View>
        <View style={Styles.MainFooterContainer}>
          <View style={Styles.subContainer}>
            <View style={Styles.MainView}>
              <View style={Styles.subView}>
                <InputText placeholder="Enter Email" name="email" />
              </View>
              <View style={Styles.subView}>
                <InputText name="phone-iphone" placeholder="Enter Number" />
              </View>
              <View style={Styles.subView}>
                <InputText placeholder="Vehical Number" />
              </View>
              <View style={Styles.subView}>
                <InputText placeholder="Identify Card Number" />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
