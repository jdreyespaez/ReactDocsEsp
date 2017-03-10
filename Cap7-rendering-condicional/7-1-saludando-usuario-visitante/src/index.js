import React from 'react';
import ReactDOM from 'react-dom';
import Saludo from './Saludo';
import './index.css';

ReactDOM.render(
  <Saludo estaAutenticado={true} />,
  document.getElementById('root')
);
