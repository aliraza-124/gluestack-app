import React, {useState, useEffect} from 'react';
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  ButtonText,
  CheckCircleIcon,
  Text,
} from '@gluestack-ui/themed';
import {AlertDialogBackdrop} from '@gluestack-ui/themed';
import {AlertDialogContent} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {Heading} from '@gluestack-ui/themed';
import {AlertDialogBody} from '@gluestack-ui/themed';

const SuccessDialog = ({isTrue}) => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);

  return (
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
            We're thrilled you're here. Whether you're checking on your order or
            browsing, we're here to assist. Thank you for choosing us!
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
  );
};

export default SuccessDialog;
