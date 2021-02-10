import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Components/Contexts/AuthContext";
import {AdminAuthProvider } from "./Components/Contexts/AdminAuthContext";
import App from "./App";
import { PizzaContextProvider } from "./Components/Contexts/ProductContext/PizzaContext";
import {CartContextProvider} from "./Components/Contexts/CartContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AdminAuthProvider> 
        <PizzaContextProvider> 
        <CartContextProvider>
      <App />
      </CartContextProvider>
      </PizzaContextProvider>
      </AdminAuthProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
