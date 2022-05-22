import React from 'react';
import ReactDOM from 'react-dom/client';
//styles
import './index.css';
//components
import App from './components/App';
//global context HOC
import AppContextProvider from './store/appContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
