import React, {useEffect, useState} from 'react';
import {Heading, Box, View} from '@gluestack-ui/themed';
import {PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

const MapScreen = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs access to your location.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
          } else {
            console.log('Location permission denied');
          }
        } else {
          getLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const getLocation = () => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          setLocationData(location);
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    };

    requestLocationPermission();

    return () => {
      // Cleanup function if needed
    };
  }, [locationData]);

  const showLocation = () => {
    return (
      locationData && (
        <>
          <Heading textAlign="center" italic underline>
            Current Location
          </Heading>
          <Heading size="sm">Accuracy: {locationData.accuracy}</Heading>
          <Heading size="sm">Altitude: {locationData.altitude}</Heading>
          <Heading size="sm">Latitude: {locationData.latitude}</Heading>
          <Heading size="sm">Longitude: {locationData.longitude}</Heading>
        </>
      )
    );
  };

  return (
    <Box p={20} gap={10}>
      {showLocation()}

      <MapView
        style={{width: '100%', height: '60%', marginTop: '10%'}}
        initialRegion={{
          latitude: locationData ? locationData.latitude : 37.78825,
          longitude: locationData ? locationData.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Box>

  //   <View style={styles.container}>
  //    <MapView
  //      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
  //      style={styles.map}
  //      region={{
  //        latitude: 37.78825,
  //        longitude: -122.4324,
  //        latitudeDelta: 0.015,
  //        longitudeDelta: 0.0121,
  //      }}
  //   / >
  //    {/* </MapView> */}
  //  </View>
  );
};

export default MapScreen;
