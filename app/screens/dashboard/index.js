import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Card, Fab, Heading, Text} from '@gluestack-ui/themed';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';

import TrendingCard from './trendingCard';
import StaticCard from './staticCard';
import GSAlertBox from '../../components/gsAlertBox';

const DashboardScreen = ({navigation}) => {
  const {showAlert} = GSAlertBox();

  return (
    <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flex={1} p={20} gap={8}>
          <Box flexDirection="row" gap={8}>
            <StaticCard
              title="Food delivery"
              description="Order food you love"
            />
            <StaticCard
              title="pandamart"
              description="Essentials delivered fast"
            />
          </Box>

          <Box flexDirection="row" gap={8}>
            <StaticCard title="Shops" description="Top brands for" />
            <StaticCard title="Pick-up" description="Self-collect for" />
          </Box>

          <Box flexDirection="row" gap={8}>
            <StaticCard title="Dine-in" description="Go out to eat" />
            <StaticCard title="pandgo" description="Send parcels in" />
          </Box>
        </Box>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Box flex={2} flexDirection="row" gap={3} mx={11}>
            <TrendingCard
              imageURL={require('../../assets/images/cheeseburger.jpg')}
              productTitle="Cheeseburger"
              productType="Burger"
              productPrice="$30"
            />

            <TrendingCard
              imageURL={require('../../assets/images/frenchfries.jpg')}
              productTitle="French Fries"
              productType="Side Dish"
              productPrice="$14"
            />

            <TrendingCard
              imageURL={require('../../assets/images/chickennuggets.jpg')}
              productTitle="Chicken Nuggets"
              productType="Appetizer"
              productPrice="$20"
            />

            <TrendingCard
              imageURL={require('../../assets/images/pepperonipizza.jpg')}
              productTitle="Pepperoni Pizza"
              productType="Pizza"
              productPrice="$30"
            />

            <TrendingCard
              imageURL={require('../../assets/images/beverage.jpg')}
              productTitle="Soft Drink"
              productType=" Beverage"
              productPrice="$10"
            />
          </Box>
        </ScrollView>

        <Box flex={1} mb={10}>
          <Card size="md" variant="elevated" mx="$3" mt="$3">
            <Heading mb="$1" size="md">
              Quick Start
            </Heading>
            <Text size="sm">Start building your next project in minutes</Text>
          </Card>

          <Card size="md" variant="elevated" mx="$3" mt="$3">
            <Heading mb="$1" size="md">
              Quick Start
            </Heading>
            <Text size="sm">Start building your next project in minutes</Text>
          </Card>

          <TouchableOpacity
            onPress={() =>
              showAlert(
                'Logout',
                'Are you sure you want to log out?',
                'No',
                'Yes',
                navigation,
                'Login',
              )
            }>
            <Card size="md" variant="elevated" mx="$3" mt="$3">
              <Heading mb="$1" size="md" textAlign="center">
                Logout
              </Heading>
            </Card>
          </TouchableOpacity>
        </Box>
      </ScrollView>

      <Fab bg="$pink600" size="lg" right="$5" bottom="$6">
        <Icon
          name="cart-shopping"
          size={24}
          color="white"
          onPress={() => navigation.navigate('ShoppingCart')}
        />
      </Fab>
    </Box>
  );
};

const style = StyleSheet.create({
  styledImage: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default DashboardScreen;
