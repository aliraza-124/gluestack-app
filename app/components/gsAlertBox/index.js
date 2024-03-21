import {Alert} from 'react-native';

const GSAlertBox = () => {
  const showAlert = (title, description, option1, option2, navigation, ScreenName) => {
    Alert.alert(
      title,
      description,
      [
        {
          text: option1,
          style: 'cancel',
        },
        {
          text: option2,
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ],
      {
        cancelable: false,
        backgroundColor: 'red',
      },
    );
  };

  return {showAlert};
};

export default GSAlertBox;
