import {Image} from '@gluestack-ui/themed';
import {Heading} from '@gluestack-ui/themed';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Heading size="2xl" underline italic>
        About Section
      </Heading>
      <Text style={styles.styledText}>
        At our food business, we're passionate about crafting unforgettable
        culinary experiences. From sourcing the freshest ingredients to
        innovating with flavors, we're dedicated to excellence. Join us as we
        redefine dining, one delicious dish at a time.
      </Text>

      <Image
        mb="$2"
        h={250}
        width="$full"
        borderRadius="$md"
        source={require('../../assets/images/about.jpg')}
        alt="card"
      />

      <Text style={styles.styledText}>
        Beyond serving delicious food, we aim to build a community around our
        culinary creations. Through local partnerships and food-focused events,
        we foster connections and inspire a love for great food. With tradition
        and innovation, we redefine dining, one delectable dish at a time. Join
        us on this flavorful journey to savor culinary excellence with every
        bite.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
  },

  styledText: {
    textAlign: 'justify',
    marginTop: '1%',
    marginBottom: '3%',
  },
});

export default AboutScreen;
