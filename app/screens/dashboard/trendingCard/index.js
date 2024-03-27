import {Text} from 'react-native';
import React from 'react';
import {Card, Image, VStack} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {Heading} from '@gluestack-ui/themed';
import SuccessToast from '../../../components/customSuccessToast';

const TrendingCard = ({imageURL, productTitle, productType, productPrice}) => {
  const {customToast} = SuccessToast();
  return (
    <Card p="$2" borderRadius="$lg" width={300} m="$1" ml="$0">
      <Image
        mb="$2"
        h={250}
        width="$full"
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
        <Text size="1xl">{productPrice}</Text>
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

      <Box flexDirection="row" mt={10}>
        <Button
          px="$10"
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
          }}
          onPress={() => customToast("Success Box!", "The chosen product has been added successfully.", "info")}
          >
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          px="$10"
          py="$2"
          variant="outline"
          fontFamily="$heading"
          borderColor="$borderLight300"
          $dark-borderColor="$backgroundDark600"
          sx={{
            '@sm': {
              flex: 1,
            },
          }}
          onPress={() => customToast("Success Box!", "The selected product has been added to the wishlist.", "attention")}
          >
          <ButtonText
            size="sm"
            color="$textLight600"
            $dark-color="$textDark400">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
};

export default TrendingCard;
