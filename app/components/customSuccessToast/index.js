import React from 'react';
import { Toast, ToastDescription, ToastTitle, useToast } from '@gluestack-ui/themed';
import { VStack } from '@gluestack-ui/themed';

const SuccessToast = () => {
  const toast = useToast();

  const customToast = (title, description, action) => {
    toast.show({
      placement: 'top',
      duration: 2000,
      render: ({id}) => {
        const toastId = 'toast-' + id;
        return (
          <Toast nativeID={toastId} variant="accent" action={action}>
            <VStack space="xs">
              <ToastTitle>{title}</ToastTitle>
              <ToastDescription>
                {description}
              </ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  return {customToast};
};

export default SuccessToast;
