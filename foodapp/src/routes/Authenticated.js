import React  from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import Home from '../screen/Home';

const Stack = createStackNavigator();

const Authenticated =()=>{
    return(
        <Stack.Navigator initialRouteName={Routes.Home}>
            <Stack.Screen name={Routes.Home} component={Home}/>
        </Stack.Navigator>
    )
}

export default Authenticated