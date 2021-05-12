import React  from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import Home from '../screen/Home';
import DrawerScreen from '../screen/Drawer/Drawer';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'



const Stack = createStackNavigator();

const Authenticated =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={DrawerScreen} 
            options={{
                headerLeft:()=>{
                    <Icon name="ios-menu" size={30}
                      backgroundColor="#009387" options={()=>{navigation.openDrawer()}} />
                }
            }} />
        </Stack.Navigator>
    )
}

export default Authenticated