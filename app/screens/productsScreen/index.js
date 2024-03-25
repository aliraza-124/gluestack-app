import React, {useState} from 'react';
import {Text} from 'react-native';
import axios from 'axios';
import {useQuery} from 'react-query';
import {
  Box,
  Progress,
  ProgressFilledTrack,
  ScrollView,
  VStack,
  Pressable,
} from '@gluestack-ui/themed';

import CustomProductsCard from './customProductsCard';
import ProductsModal from '../../components/productsModal';

const ProductsScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsQueryKey = 'getAllProducts';

  const getProducts = async () => {
    const response = await axios('https://fakestoreapi.com/products');
    return response.data;
  };

  const {data, isLoading, isError, error} = useQuery(
    productsQueryKey,
    getProducts,
  );

  const openProductDialog = product => {
    setSelectedProduct(product);
  };

  const closeProductDialog = () => {
    setSelectedProduct(null);
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
            <Pressable
              key={product.id}
              onPress={() => openProductDialog(product)}>
              <Box>
                <CustomProductsCard
                  imageURL={product.image}
                  productTitle={product.title.split(' ').slice(0, 3).join(' ')}
                  productType={product.category}
                  productPrice={product.price}
                />
              </Box>
            </Pressable>
          ))}
      </Box>

      <ProductsModal
        selectedProduct={selectedProduct}
        closeProductDialog={closeProductDialog}
      />
    </ScrollView>
  );
};

export default ProductsScreen;
