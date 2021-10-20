import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { DASHBOARD, LOGIN, SIGNUP, HOME }  from '../constants/routeNames'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName={DASHBOARD}>
        <Drawer.Screen name={DASHBOARD} component={HomeNavigator} />
      </Drawer.Navigator>
  );
}