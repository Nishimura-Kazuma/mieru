import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import userReducer from './containers/AccountSettings/AccountReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({
  reducer: {
    userData: userReducer,
    // userPoint: PointReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
