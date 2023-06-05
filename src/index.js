import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { CssBaseline } from '@mui/material';
import { Provider } from './react-redux';
import { persistor, store } from 'redux/store';
import {PersistGate} from "redux-persist/integration/react"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor} >
    <CssBaseline/>
    <App />
      </PersistGate>
    </Provider>
);

