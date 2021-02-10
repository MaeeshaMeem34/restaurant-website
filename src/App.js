import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";


import LogIn from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Admin from "./Components/Admin";
import AddPizza from "./Components/AddProducts/AddPizza"
import { AdminAuthProvider } from "./Components/Contexts/AdminAuthContext";
import AdminRoute from "./Components/CustomRoutes/AdminRoute";
import Pizzas from "./Components/DisplayItems/Pizzas";
import AdminDashboard from "./Components/AdminDashboard";
import { CartContextProvider } from "./Components/Contexts/CartContext";
import Cashout from "./Components/Cashout"

function App() {
  return (


      
        <BrowserRouter>

          <Route path="/" exact component={Dashboard} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/cashout" exact component={Cashout} />
          <AdminAuthProvider>
            <AdminRoute path="/admin" exact component={Admin} />
            <AdminRoute path="/admindashboard" exact component={AdminDashboard} />

            <Route path="/admindashboard/addpizza" component={AddPizza} />
            <Route path="/pizzas" exact component={Pizzas} />

          </AdminAuthProvider>


        </BrowserRouter>
  );
}

export default App;
