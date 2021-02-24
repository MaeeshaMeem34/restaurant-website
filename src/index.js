import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CartContextProvider } from "./components/contexts/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./components/contexts/AuthContext";

import App from "./App";
import { PizzaContextProvider } from "./components/contexts/ProductContext/PizzaContext";
import { DessertContextProvider } from "./components/contexts/ProductContext/DessertContext";


ReactDOM.render(
  
    <AuthProvider>
      
        <PizzaContextProvider>
        <DessertContextProvider> 
          <CartContextProvider>
            <App />
          </CartContextProvider>
          </DessertContextProvider>
        </PizzaContextProvider>
      
    </AuthProvider>
  ,
  document.getElementById("root")
);
