import {
  useToast,
  VStack,
  Toast,
  ToastTitle,
  ToastDescription,
} from '@gluestack-ui/themed';

const appToast = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toast = useToast();
  toast.show({
    placement: 'top',
    render: ({id}) => {
      const toastId = 'toast-' + id;
      return (
        <Toast nativeID={toastId} variant="accent" action="error">
          <VStack space="xs">
            <ToastTitle>toastTitle</ToastTitle>
            <ToastDescription>toastDescription</ToastDescription>
          </VStack>
        </Toast>
      );
    },
  });
};

export default appToast;
