import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from "./components/Cart";

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path ='/cart' exact component ={Cart}/>

    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


