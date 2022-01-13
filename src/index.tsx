import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import { RootStack } from '~/shared/routes';

import store from './shared/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </StoreProvider>
  );
}
