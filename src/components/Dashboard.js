import React from 'react';
import FoodItem from "./FoodItem/index";
import { productData, productDataTwo } from "./FoodItem/data";
import Hero from "./Hero";
import { Feature } from './FoodItem/Feature';
import { FooterContainer } from './Footer';
import { DessertFeature } from './FoodItem/Feature/DessertFeature';

const Dashboard = ({user}) => {
    return (
        <div>
             <Hero  user={user} />
      <FoodItem heading= 'Choose your Pizza' data={productData} />
      <Feature />

      <FoodItem heading= 'Choose your Dessert' data={productDataTwo} />

      <DessertFeature />

      <FooterContainer />



            
        </div>
    )
}

export default Dashboard;
