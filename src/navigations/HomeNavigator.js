import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DASHBOARD, HOME, CONTACT, CREATECONTACT, CONTACTDETAILS } from '../constants/routeNames';
import CreateContacts from '../screens/CreateContacts';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={CONTACT}>
      <Stack.Screen
        name={CONTACT}
        options={{
          headerShown: false,
        }}
        component={Contacts}
      />
      <Stack.Screen
        name={CREATECONTACT}
        options={{
          headerShown: false,
        }}
        component={CreateContacts}
      />
      <Stack.Screen
        name={CONTACTDETAILS}
        options={{
          headerShown: false,
        }}
        component={ContactDetails}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
