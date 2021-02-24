import React,{useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";

import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

import AddPizza from "./components/AddProducts/AddPizza";
import AdminRoute from "./components/CustomRoutes/AdminRoute"

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
      <Route path="/cashout" exact component={()=> <Cashout user={user}/>} />

      
      <AdminRoute user={user} path="/admindashboard" exact component={()=><AdminDashboard user={user}/>} />

      <AdminRoute user={user} path="/admindashboard/addpizza" component={()=><AddPizza user={user}/>} />
      <Route  path="/pizzas" exact component={()=> <Pizzas user={user}/>} />
      <Route  path="/pizzatable" exact component={()=><PizzaTable user={user}/>} />

      <AdminRoute user={user} path="/admindashboard/adddessert" component={()=><AddDessert user={user}/>} />
      <Route path="/desserts" exact component={()=> <Desserts user={user}/>} />


    </BrowserRouter>
  );
}

export default App;
