import React from 'react';
import ReactDOM from 'react-dom';
import '@opentok/client';

import Rooms from './Rooms.jsx';
import './index.css';
import './polyfills';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Rooms />,
    root
  );
}) 


