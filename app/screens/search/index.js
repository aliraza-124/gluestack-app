import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {
  VStack,
  Button,
  ButtonText,
  useToast,
  Toast,
  ToastTitle,
  Progress,
  ProgressFilledTrack,
  Box,
  FlatList,
} from '@gluestack-ui/themed';
import * as Yup from 'yup';
import {Formik} from 'formik';

import GSInputField from '../../components/gsInputField';
import {ToastDescription} from '@gluestack-ui/themed';
import axios from 'axios';
import {useQuery} from 'react-query';
import {Text} from '@gluestack-ui/themed';
import CustomProductsCard from '../productsScreen/customProductsCard';
import ProductsModal from '../../components/productsModal';
import {Pressable} from '@gluestack-ui/themed';

const initialValues = {searchProduct: ''};

const validationSchema = Yup.object().shape({
  searchProduct: Yup.string().required('Product name/category is required'),
});

const SearchScreen = () => {
  const [temp, setTemp] = useState('');
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

  const openProductDialog = product => {
    setSelectedProduct(product);
  };

  const closeProductDialog = () => {
    setSelectedProduct(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <VStack space="md" style={styles.styledVStack}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            const {searchProduct} = values;
            setTemp(searchProduct);
            actions.setSubmitting(false);
          }}>
          {({handleChange, handleSubmit, errors, isSubmitting}) => (
            <>
              <GSInputField
                fieldName="Product Name/Category"
                fieldType="text"
                onChangeText={handleChange('searchProduct')}
                fieldPlaceholder="iPhone 15 pro max/electronics"
                errors={errors.searchProduct}
              />

              <Button
                variant="outline"
                borderColor="red"
                backgroundColor="black"
                onPress={handleSubmit}>
                <ButtonText color="white">Search</ButtonText>
              </Button>
            </>
          )}
        </Formik>
      </VStack>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        // ListHeaderComponent={<Text>Input: {temp}</Text>}
        renderItem={({item}) => {
          if (
            !temp ||
            item.title.toLowerCase().includes(temp.trim().toLowerCase()) ||
            item.category.toLowerCase().includes(temp.trim().toLowerCase())
          ) {
            return (
              <Box key={item.id} mx={10} my={6}>
                <Pressable
                  key={item.id}
                  onPress={() => openProductDialog(item)}>
                  <CustomProductsCard
                    imageURL={item.image}
                    productTitle={item.title.split(' ').slice(0, 3).join(' ')}
                    productType={item.category}
                    productPrice={item.price}
                  />
                </Pressable>
              </Box>
            );
          }
        }}
      />

      <ProductsModal
        selectedProduct={selectedProduct}
        closeProductDialog={closeProductDialog}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  styledVStack: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 15,
  },
});

export default SearchScreen;

///////////////////////////////////////////////////////////
/* <ScrollView>
        <Text>Input: {temp}</Text>
        <Box mx={10} my={16} gap={10}> */

/*  {data &&
            data.map(product => (
              <Box key={product.id}>
                <CustomProductsCard
                  imageURL={product.image}
                  productTitle={product.title.split(' ').slice(0, 3).join(' ')}
                  productType={product.category}
                  productPrice={product.price}
                />
              </Box>
            ))} */

/* {data &&
            data
              .filter(product => {
                if (!temp) {
                  return true;
                } else {
                  return (
                    product.title.toLowerCase() === temp.toLowerCase() ||
                    product.category.toLowerCase() === temp.toLowerCase()
                  );
                }
              })
              .map(product => (
                <Box key={product.id}>
                  <CustomProductsCard
                    imageURL={product.image}
                    productTitle={product.title
                      .split(' ')
                      .slice(0, 3)
                      .join(' ')}
                    productType={product.category}
                    productPrice={product.price}
                  />
                </Box>
              ))} */

/* </Box>
      </ScrollView> */
