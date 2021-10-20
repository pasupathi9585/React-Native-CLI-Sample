import React from 'react';
import {Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DASHBOARD, LOGIN, SIGNUP, HOME }  from '../constants/routeNames'
import Login from '../screens/Login';
import Register from '../screens/Register';


const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator initialRouteName={LOGIN}>
      <Auth.Screen name={LOGIN} component={Login} />
      <Auth.Screen name={SIGNUP} component={Register} />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
