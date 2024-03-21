import React from 'react';
import {Text} from 'react-native';
import {Box, Card, Heading} from '@gluestack-ui/themed';

import FA6 from 'react-native-vector-icons/FontAwesome6';

const ProfileCustomCard = ({title, description}) => {
  return (
    <Card size="md" variant="elevated" mx="$3" borderRadius={15} gap={10}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text size="sm">{title}</Text>
        <FA6 name="pencil" size={20} color="red" />
      </Box>

      <Heading mb="$1" size="md">
        {description}
      </Heading>
    </Card>
  );
};

export default ProfileCustomCard;
