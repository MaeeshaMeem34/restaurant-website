import React,{useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";

import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import AddPizza from "./components/AddProducts/AddPizza";

import AdminRoute from "./components/CustomRoutes/AdminRoute";
import Pizzas from "./components/DisplayItems/Pizzas";
import AdminDashboard from "./components/AdminDashboard";
import PizzaTable from "./components/DisplayItems/PizzaTable";
import Cashout from "./components/Cashout";
import { db,auth } from "./Firebase";
import AddDessert from "./components/AddProducts/AddDessert";
import Desserts from "./components/DisplayItems/Desserts";

function App() {

const [user,setUser]= useState('');

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if(user){
      db.collection('UserData').doc(user.uid).get().then(snapshot=>{
        setUser(snapshot.data().Name)
      })
    }
    else{
      setUser(null);
    }
   
  });
  return unsubscribe;
}, []);




  return (
    <BrowserRouter>
      <Route path="/" exact component={()=><Dashboard user={user}/> } />
      <Route path="/cart" exact component={()=> <Cart user={user}/>} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/cashout" exact component={Cashout} />

      <AdminRoute path="/admin" exact component={Admin} />
      <AdminRoute path="/admindashboard" exact component={AdminDashboard} />

      <AdminRoute path="/admindashboard/addpizza" component={AddPizza} />
      <AdminRoute path="/pizzas" exact component={Pizzas} />
      <AdminRoute path="/pizzatable" exact component={PizzaTable} />

      <AdminRoute path="/admindashboard/adddessert" component={AddDessert} />
      <AdminRoute path="/desserts" exact component={Desserts} />


    </BrowserRouter>
  );
}

export default App;
