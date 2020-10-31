
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './components/router'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  

    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
 
  ,
  document.getElementById('root')
);






