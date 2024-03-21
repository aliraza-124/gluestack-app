import {Box, Button, ButtonText} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRCodeScreen = () => {
  const [scannedData, setScannedData] = useState(null);

  const onSuccess = e => {
    setScannedData(e.data);
  };

  const handleGetInfo = () => {
    if (scannedData) {
      // You can handle what to do with the scanned data
      Alert.alert('Scanned Data:', scannedData);
      //   console.log('Scanned Data:', scannedData);
    } else {
      Alert.alert('No QR Code scanned', 'Please scan a QR Code first.');
    }
  };

  const handleRedirect = () => {
    if (scannedData) {
      // Assuming scannedData contains the URL
      Linking.openURL(scannedData).catch(err =>
        console.error('An error occurred', err),
      );
    } else {
      Alert.alert('No QR Code scanned', 'Please scan a QR Code first.');
    }
  };

  return (
    <QRCodeScanner
      onRead={({data}) => onSuccess({data})}
      reactivate={true}
      reactivateTimeout={2000}
      showMarker={true}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>Food Menu</Text> and scan the QR
          code.
        </Text>
      }
      bottomContent={
        <Box flexDirection="row" mt={20} gap={10} px={20}>
          <Button
            flex={1}
            variant="outline"
            borderColor="red"
            backgroundColor="black"
            onPress={handleGetInfo}>
            <ButtonText color="white">Get Info</ButtonText>
          </Button>
          <Button
            flex={1}
            variant="outline"
            borderColor="red"
            backgroundColor="black"
            onPress={handleRedirect}>
            <ButtonText color="white">Redirect to Site</ButtonText>
          </Button>
        </Box>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
});

export default QRCodeScreen;
