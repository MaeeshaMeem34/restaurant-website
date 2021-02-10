import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";


<<<<<<< HEAD
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import AddPizza from "./components/AddProducts/AddPizza"
import {AdminAuthProvider } from "./components/contexts/AdminAuthContext";
import AdminRoute from "./components/CustomRoutes/AdminRoute";
import Pizzas from "./components/DisplayItems/Pizzas";
import AdminDashboard from "./components/AdminDashboard";
import PizzaTable from "./components/DisplayItems/PizzaTable";
=======
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
>>>>>>> 218e2cd452b0462dd80a979705878ec86271989e

function App() {
  return (


      
        <BrowserRouter>

<<<<<<< HEAD
        <AdminRoute path="/admindashboard/addpizza" component ={AddPizza} />
        <AdminRoute path="/pizzas" exact component={Pizzas } />
        <AdminRoute path="/pizzatable" exact component={PizzaTable } />
=======
          <Route path="/" exact component={Dashboard} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/cashout" exact component={Cashout} />
          <AdminAuthProvider>
            <AdminRoute path="/admin" exact component={Admin} />
            <AdminRoute path="/admindashboard" exact component={AdminDashboard} />
>>>>>>> 218e2cd452b0462dd80a979705878ec86271989e

            <Route path="/admindashboard/addpizza" component={AddPizza} />
            <Route path="/pizzas" exact component={Pizzas} />

          </AdminAuthProvider>


        </BrowserRouter>
  );
}

export default App;
