import {Text} from 'react-native';
import React from 'react';
import {Box, Button, Heading, VStack} from '@gluestack-ui/themed';
import {Modal} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';

const ProductsModal = ({selectedProduct, closeProductDialog}) => {
  return (
    <Box>
      <Modal
        p={20}
        isOpen={selectedProduct !== null}
        onClose={closeProductDialog}
        onBackdropPress={closeProductDialog}>
        <Box
          p={20}
          bg="white"
          borderRadius={10}
          style={{borderColor: 'red', borderWidth: 1}}>
          <Heading textAlign="center" underline italic size="1xl">
            Product Deatils
          </Heading>
          <Image
            my="$2"
            h={300}
            width="1px"
            resizeMode="contain"
            alt="card"
            source={{uri: selectedProduct?.image}}
          />

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <VStack>
              <Heading size="md" fontFamily="$heading">
                {selectedProduct?.title.split(' ').slice(0, 3).join(' ')}
              </Heading>
            </VStack>
            <Text size="1xl">${selectedProduct?.price}</Text>
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
            {selectedProduct?.category.charAt(0).toUpperCase() +
              selectedProduct?.category.slice(1)}
          </Text>

          <Box py={5}>
            <Text textAlign="center">
              {selectedProduct?.description.split('.').slice(0, 2).join('.')}
            </Text>
          </Box>

          <Box flexDirection="row" justifyContent="center" mt={10}>
            <Button
              px="$12"
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
            <Button
              px="$12"
              py="$2"
              variant="outline"
              fontFamily="$heading"
              borderColor="$borderLight300"
              $dark-borderColor="$backgroundDark600"
              onPress={closeProductDialog}
              sx={{
                '@sm': {
                  flex: 1,
                },
              }}>
              <ButtonText
                size="sm"
                color="$textLight600"
                $dark-color="$textDark400">
                Close
              </ButtonText>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductsModal;
