import React from 'react'
import Login from '../screen/Login'
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes'
import Signup from '../screen/Signup'
import Auth from '../Authentications/Auth';

const Stack = createStackNavigator();

const NotAuthenticated = () =>{
    return(
    <Stack.Navigator>
        <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name={Routes.Signup} component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name={Routes.Auth}  component={Auth} />
    </Stack.Navigator>
    )

}

export default NotAuthenticated