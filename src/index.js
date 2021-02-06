import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./components/contexts/AuthContext";
import {AdminAuthProvider } from "./components/contexts/AdminAuthContext";
import App from "./App";
import { PizzaContextProvider } from "./components/contexts/ProductContext/PizzaContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AdminAuthProvider> 
        <PizzaContextProvider> 
      <App />
      </PizzaContextProvider>
      </AdminAuthProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
