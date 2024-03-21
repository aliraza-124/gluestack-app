import React, {useState} from 'react';
import {
  Avatar,
  Box,
  Image,
  Text,
  Toast,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import ETypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';

import ProfileCustomCard from './profileCustomCard';
import {Alert} from 'react-native';

const ProfileScreen = () => {
  const [camImage, setCamImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const toast = useToast();
  const bottomToast = () => {
    toast.show({
      placement: 'bottom',
      duration: null,
      render: ({id}) => {
        const toastId = 'toast-' + id;

        return (
          <Box>
            <Toast bg="$amber600" nativeID={toastId}>
              <VStack space="xs">
                <ToastTitle color="$textLight50">Profile Photo</ToastTitle>

                <Box flexDirection="row" gap={80} mt={20}>
                  <Box alignItems="center">
                    <FA5
                      name="camera"
                      size={20}
                      color="white"
                      onPress={() => {
                        openCamera();
                        toast.close(id);
                      }}
                    />
                    <Text color="white">Camera</Text>
                  </Box>

                  <Box alignItems="center">
                    <FA
                      name="photo"
                      size={20}
                      color="white"
                      onPress={() => {
                        openLibrary();
                        toast.close(id);
                      }}
                    />
                    <Text color="white">Gallery</Text>
                  </Box>

                  <Box alignItems="center">
                    <IonIcons
                      name="trash-bin"
                      size={20}
                      color="white"
                      onPress={() => {
                        !camImage && !selectedImage
                          ? toast.close(id)
                          : (showAlert(), toast.close(id));
                      }}
                    />
                    <Text color="white">Remove</Text>
                  </Box>
                </Box>
              </VStack>

              <ETypo
                name="cross"
                size={24}
                color="white"
                right={10}
                onPress={() => toast.close(id)}
              />
            </Toast>
          </Box>
        );
      },
    });
  };

  const openCamera = async () => {
    const camResult = await launchCamera({
      cameraType: 'front',
    });
    if (!camResult.didCancel && !camResult.error) {
      setCamImage(camResult.assets[0].uri);
      setSelectedImage(null);
    }
  };

  const openLibrary = async () => {
    const LibraryResult = await launchImageLibrary({mediaType: 'photo'});
    if (!LibraryResult.didCancel && !LibraryResult.error) {
      setSelectedImage(LibraryResult.assets[0].uri);
      setCamImage(null);
    }
  };

  const showAlert = () => {
    Alert.alert(
      '',
      'Remove Profile Photo?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            setCamImage(null);
            setSelectedImage(null);
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <Box flex={1} mt={20}>
      <Box
        flex={1}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="relative">
        {camImage || selectedImage ? (
          <Image
            source={{uri: camImage || selectedImage}}
            alt="User Profile"
            size="2xl"
            borderRadius="$full"
            style={{width: 140, height: 140}}
          />
        ) : (
          <Avatar bgColor="$amber600" size="2xl" borderRadius="$full" />
        )}

        <Box
          p={10}
          bgColor="$pink600"
          borderRadius="$full"
          position="absolute"
          right={140}
          top={110}>
          <FA5
            name="camera"
            size={20}
            color="white"
            onPress={() => bottomToast()}
          />
        </Box>
      </Box>

      <Box flex={3} gap={10}>
        <ProfileCustomCard title="Name" description="ALi Raza" />
        <ProfileCustomCard title="Email" description="ali@gmail.com" />
        <ProfileCustomCard title="Password" description="****************" />
      </Box>
    </Box>
  );
};

export default ProfileScreen;
