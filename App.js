import * as React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import Toast from 'react-native-toast-message';

import { store } from "./src/store";
import { Provider } from "react-redux";


import { applyMiddleware } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AppContainer from './src/navigation/Router';
import { toastConfig } from './src/components/Toast/Toast';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppContainer />
          <Toast config={toastConfig} />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
