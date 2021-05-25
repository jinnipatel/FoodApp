import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Routes from '../../../routes/routes';
import Home from '../../../screen/Home';
import DrawerContent from './DrawerContent';



const Drawer = createDrawerNavigator();

export function DrawerComponent (props) {
  
        return (
           <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
               <Drawer.Screen name={Routes.Home} component={Home}/>
           </Drawer.Navigator>
        )
  
}

export default DrawerComponent
