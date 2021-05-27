import React from 'react';
import Login from '../screen/Login';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import Signup from '../screen/Signup';
import Auth from '../Authentications/Auth';
import Onborading from '../screen/Onborading';
import ForgotPassword from '../screen/ForgotPassword';
import OtpScreen from '../screen/ForgotPassword/OtpScreen';
import ResetPassword from '../screen/ForgotPassword/ResetPassword';

const Stack = createStackNavigator();

const NotAuthenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Onborading}
        component={Onborading}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Signup}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Auth}
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ForgotPassword}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.OtpScreen}
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ResetPassword}
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NotAuthenticated;
