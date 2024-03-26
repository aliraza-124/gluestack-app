/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AboutScreen from '../../../screens/about';
import AppBottomTabs from '../../appBottomTabs';
import QRCodeScanner from '../../../screens/qrCodeScanner';
import GSAlertBox from '../../../components/gsAlertBox';
import MapScreen from '../../../screens/map';
import {Box, Image, Text} from '@gluestack-ui/themed';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {navigation} = props;
  const {showAlert} = GSAlertBox();
  
  return (
    <DrawerContentScrollView {...props}>
      <Box
      top={0}
        py={20}
        px={10}
        gap={2}
        bg="$pink600"
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/images/profile.jpg')}
          alt="Profile Photo"
          style={{width: 80, height: 80, borderRadius: 40, marginBottom: 10}}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold',  color: "white"}}>
          ALi Raza
        </Text>
        <Text style={{fontSize: 14,  color: "white"}}>
          aliraza@gmail.com
        </Text>
      </Box>
      
      <DrawerItem
        label="Dashboard"
        onPress={() => navigation.navigate('Dashboard1')}
        icon={() => <Icon name="house" size={20} color="#000" />}
      />

      <DrawerItem
        label="About"
        onPress={() => navigation.navigate('About')}
        icon={() => <Icon name="info" size={20} color="#000" />}
      />
      <DrawerItem
        label="QRCode"
        onPress={() => navigation.navigate('QRCode')}
        icon={() => <Icon name="qrcode" size={20} color="#000" />}
      />
      <DrawerItem
        label="Map - working"
        onPress={() => navigation.navigate('Map - working')}
        icon={() => <Icon name="map" size={20} color="#000" />}
      />
      <DrawerItem
        label="Logout"
        onPress={() =>
          showAlert(
            'Logout',
            'Are you sure you want to log out?',
            'No',
            'Yes',
            navigation,
            'Login',
          )
        }
        icon={() => <Icon name="power-off" size={20} color="#D81B60" />}
      />
    </DrawerContentScrollView>
  );
}

function AppDrawer({navigation}) {
  const {showAlert} = GSAlertBox();
  
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard1"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        width: 260,
      }}
      screenOptions={{
        headerTitleAlign: 'center',

        headerRight: () => (
          <Icon
            name="power-off"
            size={20}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{color: '#D81B60', marginRight: 16}}
            onPress={() =>
              showAlert(
                'Logout',
                'Are you sure you want to log out?',
                'No',
                'Yes',
                navigation,
                'Login',
              )
            }
          />
        ),

      }}>


      <Drawer.Screen
        name="Dashboard1"
        component={AppBottomTabs}
        options={{title: 'Dashboard'}}
      />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="QRCode" component={QRCodeScanner} />
      <Drawer.Screen name="Map - working" component={MapScreen} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
