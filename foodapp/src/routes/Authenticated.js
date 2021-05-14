import React  from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import DrawerScreen from '../screen/Drawer/Drawer';



const Stack = createStackNavigator();



const Authenticated =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={DrawerScreen} 
            options={{
               headerShown:false
            }} />
        </Stack.Navigator>
    )
}

export default Authenticated