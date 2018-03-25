import Room from './Room.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

export const renderApp = (credentials) => {
  ReactDOM.render(
    <Room credentials={credentials}/>,
    document.getElementById('root')
  );
};
