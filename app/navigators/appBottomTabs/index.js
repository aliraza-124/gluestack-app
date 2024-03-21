import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MIcons from 'react-native-vector-icons/MaterialIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome6';

import DashboardScreen from '../../screens/dashboard';
import SearchScreen from '../../screens/search';
import FavoriteScreen from '../../screens/favorite';
import ProductsScreen from '../../screens/productsScreen';
import ProfileScreen from '../../screens/profile';

const Bottom = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D81B60',
      }}>
      {/* <Bottom.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{
          tabBarLabel: 'AppDrawer',

          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            return <Icon name="house" size={24} />;
          },
        }}
      /> */}

      <Bottom.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          // tabBarLabel: '',

          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            return <Icon name="house" size={24} />;
          },
        }}
      />

      <Bottom.Screen
        name="Search"
        component={SearchScreen}
        options={{
          // tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            return <FA5 name="search" size={24} />;
          },
        }}
      />

      <Bottom.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          // tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            return <MIcons name="favorite" size={32} />;
          },
        }}
      />
      <Bottom.Screen
        name="Explore"
        component={ProductsScreen}
        options={{
          // tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            return <Icon name="box-archive" size={24} />;
          },
        }}
      />

      <Bottom.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            return <Icon name="user-large" size={26} />;
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default AppBottomTabs;
