import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Button, ButtonText, Image} from '@gluestack-ui/themed';

const GetStartedScreen = ({navigation}) => {
  return (
    <Box flex={1}>
      <Image
        source={require('../../assets/images/splash.jpg')}
        style={style.styledImage}
        alt="getstarted"
      />
      <Box position="absolute" bottom={30} alignSelf="center">
        <Button
          variant="outline"
          size="xl"
          borderColor="red"
          style={style.styledButton}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <ButtonText color="white">Get Started</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

const style = StyleSheet.create({
  styledImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  styledButton: {
    paddingHorizontal: 100,
  },
});

export default GetStartedScreen;
