import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './store/reducers';
import App from './components/App/App';
import './styles/style.scss';

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
