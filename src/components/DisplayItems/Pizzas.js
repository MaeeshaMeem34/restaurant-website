import React,{useContext, useState} from 'react'
import { PizzaContext } from '../contexts/ProductContext/PizzaContext';
import {CartContext} from '../contexts/CartContext'
import "./Pizzas.css";
import Navbar  from '../Navbar/UserNavbar/Navbar';
import Sidebar from "../Sidebar/index";
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ItemLink
    
   
  }  from "../FoodItem/FoodItemElement";



const Pizzas = ({user}) => {

    const [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    };
    const { pizzas } = useContext(PizzaContext);

   const {dispatch} =useContext(CartContext)
    

    

    return (
        <>
         <Navbar user={user} toggle={toggle}  />
         <Sidebar isOpen={isOpen} toggle={toggle} />
            
            
       
            { //pizzas.length !== 0 && <h1>Pizzas</h1> 
}
            <ProductsContainer> 
            <ProductWrapper>
        {pizzas.map(product => {
          return (
            <ProductCard key={product.ID}>
              <ProductImg src={product.ProductImg} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.ProductName}</ProductTitle>
                <ProductDesc>{product.ProductDescription}</ProductDesc>
                <ProductPrice>{product.ProductPrice}</ProductPrice>
                <ItemLink  onClick={()=> {dispatch({type:'ADD_TO_CART',id: product.ID, product})}}> ADD TO CART</    ItemLink>
                
                    
              </ProductInfo>
              
                     

            </ProductCard>
          );
        })}
      </ProductWrapper>
      </ProductsContainer>


         
           
            </>
    )
}

export default Pizzas;
