import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {
  ImageBackground,
  VStack,
  Heading,
  Button,
  ButtonText,
  AlertDialog,
  AlertDialogContent,
  HStack,
  CheckCircleIcon,
  useToast,
  Toast,
  ToastTitle,
} from '@gluestack-ui/themed';
import * as Yup from 'yup';
import {Formik} from 'formik';

import {AlertDialogBackdrop} from '@gluestack-ui/themed';
import {AlertDialogHeader} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {AlertDialogBody} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {AlertDialogFooter} from '@gluestack-ui/themed';

import GSInputField from '../../components/gsInputField';
import {ToastDescription} from '@gluestack-ui/themed';

import { useAuth } from '../../utils/authUtils';

const initialValues = {email: '', password: ''};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen = ({navigation}) => {
  const { authenticateUser } = useAuth();
  const [showAlertDialog, setShowAlertDialog] = useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login.jpg')}
        resizeMode="cover"
        style={styles.styledBgImage}>
        <VStack space="md" style={styles.styledVStack}>
          <Heading underline italic size={'2xl'} style={{textAlign: 'center'}}>
            Sign-In Screen
          </Heading>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              const {email, password} = values;
              const authenticate = authenticateUser(email, password);

              if (authenticate) {
                navigation.navigate('AppDrawer');
                setShowAlertDialog(true);
                actions.resetForm();
                actions.setSubmitting(false);
              } else {
                customToast();
              }
            }}>
            {({handleChange, handleSubmit, values, errors, isSubmitting}) => (
              <>
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
                  onPress={handleSubmit}>
                  <ButtonText color="white">Login</ButtonText>
                </Button>

                <Button
                  variant="link"
                  size="xs"
                  onPress={() => navigation.navigate('Registration')}>
                  <ButtonText color="black">New User? Sign-up</ButtonText>
                </Button>
              </>
            )}
          </Formik>
        </VStack>
      </ImageBackground>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader borderBottomWidth="$0">
            <HStack space="sm" alignItems="center">
              <Icon
                as={CheckCircleIcon}
                color="$success700"
                $dark-color="$success300"
              />
              <Heading size="lg"> Welcome back! 🎉 </Heading>
            </HStack>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              We're thrilled you're here. Whether you're checking on your order
              or browsing, we're here to assist. Thank you for choosing us!
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowAlertDialog(false);
              }}>
              <ButtonText>Okay</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
    paddingVertical: 30,
    borderRadius: 15,
    marginHorizontal: 20,
  },

  styledBgImage: {width: '100%', flex: 1, justifyContent: 'center'},
});

export default LoginScreen;

//////////////////////////////////// Login form with Formik and Yup /////////////////////////////

// import React from 'react';
// import {View} from 'react-native';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import GSInputField from '../../components/gsInputField';
// import {Button, ButtonText} from '@gluestack-ui/themed';

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   pass word: Yup.string().required('Password is required'),
// });

// const LoginScreen = ({navigation}) => {
//   return (
//    <Formik
//       initialValues={{email: '', password: ''}}
//       validationSchema={validationSchema}
//       onSubmit={(values, actions) => {
//         if (values.email === 'ali@gmail.com' && values.password === '124') {
//           console.warn('Welcome!');
//           navigation.navigate('AppDrawer');
//         } else {
//           console.warn('WARNING! email/password is incorrect.');
//         }

//         actions.setSubmitting(false);
//         actions.resetForm();
//       }}>
//       {({handleChange, handleSubmit, errors, isSubmitting}) => (
//         <View>
//           <View>
//             <GSInputField
//               fieldName="Email"
//               fieldType="text"
//               onChangeText={handleChange('email')}
//               fieldPlaceholder="test@example.com"
//               errors={errors.email}
//             />
//           </View>
//           <View>
//             <GSInputField
//               fieldName="Password"
//               fieldType="password"
//               onChangeText={handleChange('password')}
//               fieldPlaceholder="******"
//               errors={errors.password}
//             />
//           </View>
//           <Button onPress={handleSubmit} disabled={isSubmitting}>
//             <ButtonText>Login</ButtonText>
//           </Button>
//         </View>
//       )}
//     </Formik>
//   );
// };

// export default LoginScreen;
