import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export const renderApp = (credentials) => {
  ReactDOM.render(
    <App credentials={credentials}/>,
    document.getElementById('root')
  );
};
