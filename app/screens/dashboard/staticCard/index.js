import {Text} from 'react-native';
import React from 'react';
import {Box, Card, Heading, VStack} from '@gluestack-ui/themed';

const StaticCard = ({title, description, imgUrl}) => {
  return (
    <Card p="$2" borderRadius="$lg" width={180}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <VStack>
          <Heading size="sm" fontFamily="$heading">
            {title}
          </Heading>
        </VStack>
      </Box>
      <Text
        fontSize="$xs"
        fontStyle="normal"
        fontWeight="$normal"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{fontSize: 10}}>
        {description}
      </Text>
    </Card>
  );
};

export default StaticCard;
