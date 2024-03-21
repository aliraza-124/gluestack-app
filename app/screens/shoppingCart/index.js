import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Button, ButtonText, Heading, Image} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';

const ShoppingCart = ({navigation}) => {
  return (
    <Box style={styles.container} gap={15}>
      <Image
        source={require('../../assets/images/cart.png')}
        alt="shoppingCart"
      />
      <Heading size="2xl">Hungry?</Heading>
      <Text fontSize={14}>You haven't added anything to your cart!</Text>
      <Button
        size="xs"
        bg="$pink600"
        onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText>Browse</ButtonText>
      </Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShoppingCart;
