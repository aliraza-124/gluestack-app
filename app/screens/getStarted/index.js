import { Box, Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GetStartedScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF6B6B', '#434343', '#FF4081']} style={styles.linearGradient}>        
        <Box position="absolute" bottom={30} alignSelf="center">
          <Text style={styles.title}>Let's Get</Text>
          <Text style={styles.title}>Started</Text>

          <Text style={styles.subTitle}>Dive into a world of mouth-watering flavors and culinary excellence. Discover dishes that tantalize your taste buds.</Text>
          <Button
            variant="solid"
            size="lg"
            bgColor= "white"
            width="$full"
            borderRadius={10}
            px={100}
            onPress={() => {
              navigation.navigate('Registration');
          }}>
            <ButtonText color="$pink600">Join Now</ButtonText>
          </Button>

          <Button
            variant="link"
            size="xs"
            onPress={() => navigation.navigate('Login')}>
            <ButtonText style={styles.styledButton}>Already have an account? Login</ButtonText>
          </Button>
        </Box>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  subTitle: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 60,
    letterSpacing: 1,
  },
  styledButton: {
    color: 'white',
    letterSpacing: 1,
    paddingTop: 8,
  },
});

export default GetStartedScreen;



/////////////////////////// With background IMGE ////////////////////

// import {StyleSheet} from 'react-native';
// import React from 'react';
// import {Box, Button, ButtonText, Image} from '@gluestack-ui/themed';
// import { LinearGradient } from '@gluestack-ui/themed';
// import { Text } from '@gluestack-ui/themed';

// const GetStartedScreen = ({navigation}) => {
//   return (
//     <Box flex={1}>
//       <Image
//         source={require('../../assets/images/splash.jpg')}
//         style={style.styledImage}
//         alt="getstarted"
//       />
//       <Box position="absolute" bottom={30} alignSelf="center">
//         <Button
//           variant="outline"
//           size="xl"
//           borderColor="red"
//           style={style.styledButton}
//           onPress={() => {
//             navigation.navigate('Login');
//           }}>
//           <ButtonText color="white">Get Started</ButtonText>
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// const styles = StyleSheet.create({
//   styledImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   },

//   styledButton: {
//     paddingHorizontal: 100,
//   },
// });

// export default GetStartedScreen;