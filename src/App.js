import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";


import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import AddPizza from "./components/AddProducts/AddPizza"
import {AdminAuthProvider } from "./components/contexts/AdminAuthContext";
import AdminRoute from "./components/CustomRoutes/AdminRoute";
import Pizzas from "./components/DisplayItems/Pizzas";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <AdminAuthProvider> 
        <AdminRoute path="/admin" exact component={Admin} />
        <AdminRoute path="/admindashboard" exact component={AdminDashboard} />

        <Route path="/admindashboard/addpizza" component ={AddPizza} />
        <Route path="/pizzas" exact component={Pizzas } />

        </AdminAuthProvider>
        
        

      
    </BrowserRouter>
  );
}

export default App;
