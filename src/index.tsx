import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { RootStack } from '~/shared/routes';

export default function App() {
  return (
    <PaperProvider>
      <RootStack />
    </PaperProvider>
  );
}
