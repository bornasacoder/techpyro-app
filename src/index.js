import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProviderWrapper from 'theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProviderWrapper>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor} >
    <CssBaseline/>
    <App />
      </PersistGate>
    </Provider>
  </ThemeProviderWrapper>
);

