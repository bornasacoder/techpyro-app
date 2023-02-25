import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProviderWrapper from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider>
  <ThemeProviderWrapper>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline/>
        <App />
    </PersistGate>
    </Provider>
  </ThemeProviderWrapper>
  </SnackbarProvider>
);

