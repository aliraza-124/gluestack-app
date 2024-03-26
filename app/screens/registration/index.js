import React from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import {
  ImageBackground,
  VStack,
  Heading,
  Button,
  ButtonText,
  useToast,
} from '@gluestack-ui/themed';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {Toast} from '@gluestack-ui/themed';
import {ToastTitle} from '@gluestack-ui/themed';
import {ToastDescription} from '@gluestack-ui/themed';

import GSInputField from '../../components/gsInputField';
import { useAuth } from '../../utils/authUtils';


const initialValues = {name: '', email: '', password: ''};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const RegistrationScreen = ({navigation}) => {
  const { registerUser } = useAuth();

  const toast = useToast();

  const customToast = name => {
    toast.show({
      placement: 'top',
      render: ({id}) => {
        const toastId = 'toast-' + id;
        return (
          <Toast nativeID={toastId} variant="accent" action="success">
            <VStack space="xs">
              <ToastTitle>Success Box!</ToastTitle>
              <ToastDescription>
                Mr/Mrs {name} - you are successfully registered.
              </ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/register.jpg')}
        resizeMode="cover"
        style={styles.styledbgImage}>
        <VStack space="md" style={styles.styledVStack}>
          <Heading underline italic size={'2xl'} style={{textAlign: 'center'}}>
            Sign-Up Screen
          </Heading>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              const {name, email, password} = values;
              customToast(name);

              registerUser(name, email, password);

              navigation.navigate('Login');
              actions.resetForm();
              actions.setSubmitting(false);
            }}>
            {({handleChange, handleSubmit, values, errors, isSubmitting}) => (
              <>
                <GSInputField
                  fieldName="Name"
                  fieldType="text"
                  onChangeText={handleChange('name')}
                  value={values.name}
                  fieldPlaceholder="example name"
                  errors={errors.name}
                />

                <GSInputField
                  fieldName="Email"
                  fieldType="text"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  fieldPlaceholder="test@example.com"
                  errors={errors.email}
                />

                <GSInputField
                  fieldName="Password"
                  fieldType="password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  fieldPlaceholder="******"
                  errors={errors.password}
                />

                <Button
                  variant="outline"
                  borderColor="red"
                  backgroundColor="black"
                  onPress={handleSubmit}
                  disabled={isSubmitting}>
                  <ButtonText color="white">Register</ButtonText>
                </Button>

                <Button
                  variant="link"
                  size="xs"
                  onPress={() => navigation.navigate('Login')}>
                  <ButtonText color="black">Already User? Sign-in</ButtonText>
                </Button>
              </>
            )}
          </Formik>
        </VStack>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  styledbgImage: {width: '100%', flex: 1, justifyContent: 'center'},

  styledVStack: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    paddingVertical: 30,
    borderRadius: 15,
    marginHorizontal: 20,
  },
});

export default RegistrationScreen;
