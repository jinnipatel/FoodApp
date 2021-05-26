import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import Routes from '../../../routes/routes';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../../../utils/Color';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: Color.APPLE}}>
      <View
        style={{flex: 1, flexDirection: 'row', marginTop: 50, marginLeft: 20}}>
        <Avatar.Image source={require('../../../assets/Img/user1.png')} />
        <View style={{marginLeft: 15}}>
          <Title style={{fontSize: 20, color: Color.WHITE}}>JOHN DOE</Title>
          <Caption style={{fontSize: 16, color: Color.WHITE}}>
            driverone@gmail.com
          </Caption>
        </View>
      </View>

      <View
        style={{
          flex: 5,
          backgroundColor: Color.WHITE,
          padding: 15,
          borderTopStartRadius: 20,
          borderTopEndRadius: 12,
          marginTop: 20,
        }}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <Icon name="home-outline" color={Color.GREEN_GREEN} size={30} />
            )}
            label="Dashboard"
            labelStyle={{fontSize: 20, color: Color.GREEN_GREEN}}
          />
          <DrawerItem
            icon={() => (
              <Icon name="face-profile" color={Color.GREEN_GREEN} size={30} />
            )}
            label="My Profile"
            labelStyle={{fontSize: 20, color: Color.GREEN_GREEN}}
            onPress={() => props.navigation.navigate(Routes.Profile)}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="file-document-edit-outline"
                color={Color.GREEN_GREEN}
                size={30}
              />
            )}
            label="Documents"
            labelStyle={{fontSize: 20, color: Color.GREEN_GREEN}}
          />
          <DrawerItem
            icon={() => (
              <Icons name="attach-money" color={Color.GREEN_GREEN} size={30} />
            )}
            label="Earning"
            labelStyle={{fontSize: 20, color: Color.GREEN_GREEN}}
          />
          <DrawerItem
            icon={() => (
              <Feather name="settings" color={Color.GREEN_GREEN} size={30} />
            )}
            label="Setting"
            labelStyle={{fontSize: 20, color: Color.GREEN_GREEN}}
          />
          <DrawerItem
            icon={() => (
              <Icon name="logout" color={Color.GREEN_GREEN} size={30} />
            )}
            label="Log-Out"
            labelStyle={{fontSize: 20, color: Color.GREEN_GREEN}}
          />
        </Drawer.Section>
      </View>
    </View>
  );
}

export default DrawerContent;
