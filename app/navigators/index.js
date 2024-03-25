import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GetStartedScreen from '../screens/getStarted';
import LoginScreen from '../screens/login';
import RegistrationScreen from '../screens/registration';
// import AppDrawer from './appDrawer';
import ShoppingCart from '../screens/shoppingCart';
import AppBottomTabs from './appBottomTabs';
import AppDrawer from './appDrawer/customDrawerContent';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppDrawer"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        <Stack.Screen name="AppBottomTabs" component={AppBottomTabs} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
