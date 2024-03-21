import {View, Text} from 'react-native';
import React from 'react';
import {Box} from '@gluestack-ui/themed';

import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomIcons = () => {
  return (
    <Box flexDirection="row" gap={60} mt={20} style={{color: 'white'}}>
      <Box alignItems="center">
        <FA5 name="camera" size={20} color="white" onPress={() => {}} />
        <Text color="white">Camera</Text>
      </Box>

      <Box alignItems="center">
        <FA name="photo" size={20} color="white" onPress={() => {}} />
        <Text color="white">Gallery</Text>
      </Box>

      <Box alignItems="center">
        <MCIcons
          name="face-woman-profile"
          size={20}
          color="white"
          onPress={() => {}}
        />
        <Text color="white">Avatar</Text>
      </Box>
    </Box>
  );
};

export default CustomIcons;
