import React from "react";



import FoodItem from "./components/FoodItem";
import { productData } from "./components/FoodItem/data";
import Hero from "./components/Hero";

function App() {
  return (
    <div> 
       <Hero />
      <FoodItem heading= 'choose your food' data={productData}/>
      
    </div>
      
     
   
  );
}

export default App;
