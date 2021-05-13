import * as React from 'react';
import{createDrawerNavigator} from '@react-navigation/drawer'
import Routes from '../../routes/routes';
import Home from '../Home';

const Drawer = createDrawerNavigator();

export default function DrawerScreen(){
    return(
        <Drawer.Navigator drawerPosition="right">
            <Drawer.Screen name={Routes.Home} component={Home}/>
        </Drawer.Navigator>
    )
}