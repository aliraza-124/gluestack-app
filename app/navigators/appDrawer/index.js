import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AboutScreen from '../../screens/about';
import AppBottomTabs from '../appBottomTabs';
import QRCodeScanner from '../../screens/qrCodeScanner';
import GSAlertBox from '../../components/gsAlertBox';
import MapScreen from '../../screens/map';

const Drawer = createDrawerNavigator();

function AppDrawer({navigation}) {
  const {showAlert} = GSAlertBox();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard1"
      screenOptions={{
        headerTitleAlign: 'center',
        drawerStyle: {
          width: 260,
        },

        // eslint-disable-next-line react/no-unstable-nested-components
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
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        // options={{
        //   // eslint-disable-next-line react/no-unstable-nested-components
        //   drawerIcon: ({color, size}) => (
        //     <Icon
        //       name="power-off"
        //       color={color}
        //       size={20}
        //       style={{padding: 0}}
        //     />
        //   ),
        // }}
      />
      <Drawer.Screen name="QRCode" component={QRCodeScanner} />
      <Drawer.Screen name="Map - working" component={MapScreen} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
