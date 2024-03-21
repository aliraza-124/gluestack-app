import {Text} from 'react-native';
import React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import {
  Box,
  Progress,
  ProgressFilledTrack,
  ScrollView,
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';

import CustomProductsCard from './customProductsCard';

const ProductsScreen = () => {
  const productsQueryKey = 'getAllProducts';

  const getProducts = async () => {
    const response = await axios('https://fakestoreapi.com/products');
    return response.data;
  };

  const {data, isLoading, isError, error} = useQuery(
    productsQueryKey,
    getProducts,
  );

  const toast = useToast();

  const customToast = () => {
    toast.show({
      placement: 'top',
      render: ({id}) => {
        const toastId = 'toast-' + id;
        return (
          <Toast nativeID={toastId} variant="accent" action="error">
            <VStack space="xs">
              <ToastTitle>Network Error!</ToastTitle>
              <ToastDescription>
                The internet is not stable at your side. Please try again.
              </ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  if (isLoading) {
    return (
      <VStack flex={1} justifyContent="center" alignItems="center" space="lg">
        <Text size="lg">Loading 99%</Text>
        <Progress value={99} w="$80" h="$1">
          <ProgressFilledTrack h="$1" />
        </Progress>
      </VStack>
    );
  }

  if (isError) {
    return <Box>{error.message}</Box>;
  }

  return (
    <ScrollView>
      <Box mx={10} my={20} gap={10}>
        {data &&
          data.map(product => (
            <Box key={product.id}>
              <CustomProductsCard
                imageURL={product.image}
                productTitle={product.title.split(' ').slice(0, 3).join(' ')}
                productType={product.category}
                productPrice={product.price}
              />
            </Box>
          ))}
      </Box>
    </ScrollView>
  );
};

export default ProductsScreen;
