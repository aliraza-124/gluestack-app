import {Text} from 'react-native';
import React from 'react';
import {Card, Divider, Image, VStack} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {Heading} from '@gluestack-ui/themed';

import MIcons from 'react-native-vector-icons/MaterialIcons';

const FavoriteCustomCard = ({
  imageURL,
  productTitle,
  productType,
  productPrice,
}) => {
  return (
    <Card p="$2" borderRadius="$lg">
      <Image
        mb="$2"
        h={300}
        width="$full"
        resizeMode="contain"
        borderRadius="$md"
        source={imageURL}
        alt="card"
      />
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <VStack>
          <Heading size="md" fontFamily="$heading">
            {productTitle}
          </Heading>
        </VStack>
        <Text size="1xl">${productPrice}</Text>
      </Box>
      <Text
        fontSize="$xs"
        fontStyle="normal"
        fontFamily="$heading"
        fontWeight="$normal"
        mb="$3"
        sx={{
          color: '$textLight700',
          _dark: {
            color: '$textDark200',
          },
        }}>
        {productType}
      </Text>

      <Box flexDirection="row" justifyContent="center" mt={10}>
        <Button
          px="$24"
          py="$2"
          fontFamily="$heading"
          mr="$1"
          backgroundColor="black"
          sx={{
            '@sm': {
              mr: '$3',
              mb: '$0',
              flex: 1,
            },
          }}>
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>

        <MIcons name="favorite" size={36} color="red" />
      </Box>
    </Card>
  );
};

export default FavoriteCustomCard;
