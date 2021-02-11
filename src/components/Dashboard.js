import React from 'react';
import FoodItem from "./FoodItem/index";
import { productData } from "./FoodItem/data";
import Hero from "./Hero";

const Dashboard = ({user}) => {
    return (
        <div>
             <Hero  user={user}/>
      <FoodItem heading= 'choose your food' data={productData}/>
            
        </div>
    )
}

export default Dashboard;
