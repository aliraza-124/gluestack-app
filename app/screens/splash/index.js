import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import LoginScreen from '../login';

const SplashScreen = () => {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 4000);
  }, []);

  return (
    <View style={{flex: 1}}>
      {splashVisible ? (
        <Image
          source={require('../../assets/images/login.jpg')}
          style={{flex: 1, resizeMode: 'cover'}}
        />
      ) : (
        <LoginScreen />
      )}
    </View>
  );
};

export default SplashScreen;
