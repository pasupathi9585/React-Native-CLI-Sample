import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavication from './src/navigations/index'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <AppNavication>
    </AppNavication>
  );
};

export default App;
