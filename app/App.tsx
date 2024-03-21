import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';

import AppNavigation from './navigators';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <AppNavigation />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
};

export default App;
