import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProviderWrapper from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProviderWrapper>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CssBaseline/>
    <App />
    </PersistGate>
  </Provider>
  </ThemeProviderWrapper>
)