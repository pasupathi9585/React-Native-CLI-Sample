 import { NavigationContainer } from '@react-navigation/native';
 import React, { useContext } from 'react';
 import HomeNavigator from './HomeNavigator';
 import AuthNavigator from './AuthNavigator';
 import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
 
 const AppNavication = () => {
   const {
     authState: { isLoggedIn }
   } = useContext(GlobalContext)

   return (
     <NavigationContainer>
       {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>} 
     </NavigationContainer>
   );
 };
 
 export default AppNavication;
 