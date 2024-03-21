import React from 'react';
import {Box} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import {ScrollView} from '@gluestack-ui/themed';

import FavoriteCustomCard from './favoriteCustomCard';

const FavoriteScreen = () => {
  return (
    <ScrollView>
      <Box mx={10} my={20} gap={10}>
        <FavoriteCustomCard
          imageURL={require('../../assets/images/cheeseburger.jpg')}
          productTitle="Cheese Burger"
          productType="Burger"
          productPrice="30"
        />

        <FavoriteCustomCard
          imageURL={require('../../assets/images/frenchfries.jpg')}
          productTitle="French Fries"
          productType="Side Dish"
          productPrice="14"
        />
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default FavoriteScreen;
