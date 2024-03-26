import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';

import { AuthProvider } from './utils/authUtils';

import AppNavigation from './navigators';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <GluestackUIProvider config={config}>
        <AppNavigation />
      </GluestackUIProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
