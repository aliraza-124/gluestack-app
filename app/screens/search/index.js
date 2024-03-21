import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
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
  ScrollView,
  KeyboardAvoidingView,
} from '@gluestack-ui/themed';
import * as Yup from 'yup';
import {Formik} from 'formik';

import GSInputField from '../../components/gsInputField';
import {ToastDescription} from '@gluestack-ui/themed';
import axios from 'axios';
import {useQuery} from 'react-query';
import {Text} from '@gluestack-ui/themed';
import CustomProductsCard from '../productsScreen/customProductsCard';

const initialValues = {searchProduct: ''};

const validationSchema = Yup.object().shape({
  searchProduct: Yup.string().required('Product name/category is required'),
});

const SearchScreen = () => {
  const [temp, setTemp] = useState('');
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
              <ToastTitle>Authentication Error!</ToastTitle>
              <ToastDescription>
                The username/password you provided is incorrect. Please try
                again.
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
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    //   style={{flex: 1, zIndex: 999}}>
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

        <ScrollView>
          <Text>Input: {temp}</Text>
          <Box mx={10} my={16} gap={10}>
            {/*  {data &&
            data.map(product => (
              <Box key={product.id}>
                <CustomProductsCard
                  imageURL={product.image}
                  productTitle={product.title.split(' ').slice(0, 3).join(' ')}
                  productType={product.category}
                  productPrice={product.price}
                />
              </Box>
            ))} */}

            {data &&
              data
                .filter(product => {
                  if (!temp) {
                    return true;
                  } else {
                    // If search term provided, filter products by title or category
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
                ))}
          </Box>
        </ScrollView>
      </SafeAreaView>
    // </KeyboardAvoidingView>
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

// import {FlatList, View, Text} from 'react-native';

// const data = [
//   {id: '1', name: 'Item 1'},
//   {id: '2', name: 'Item 2'},
//   // Add more items as needed
// ];

// const renderItem = ({item}) => (
//   <View>
//     <Text>{item.name}</Text>
//   </View>
// );

// const SearchScreen = () => {
//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//     />
//   );
// };

// export default SearchScreen;
