import * as React from 'react';
import{createDrawerNavigator} from '@react-navigation/drawer'
import Routes from '../../routes/routes';
import Home from '../Home';
import { Color } from '../../utils/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContent } from './DrawerContent';
import { Avatar } from 'react-native-paper';
// import Drawer from 'react-native-circle-drawer'


const Drawer = createDrawerNavigator();

export default function DrawerScreen(){
    return(
       <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>} >
           <Drawer.Screen name={Routes.Home} component={Home} />
           
       </Drawer.Navigator>
          
       
    )
}