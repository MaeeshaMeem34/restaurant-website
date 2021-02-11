import React,{useContext} from 'react'

import {CartContext} from '../contexts/CartContext'
import "./Pizzas.css";
import { Navbar } from '../Navbar/UserNavbar/Navbar'
import {Navbar2} from '../Navbar2'
import { DessertContext } from '../contexts/ProductContext/DessertContext';


const Desserts = () => {
    const {  Desserts } = useContext(DessertContext);

   const {dispatch} =useContext(CartContext)
    

    

    return (
        <>
        <Navbar2/>
            <>
            
       
            { Desserts.length !== 0 && <h1>Desserts</h1>}
            <div className='products-container'>
                { Desserts.length === 0 && <div>slow internet...no products to display</div>}
                { Desserts.map(product => (
                    <div className='product-card' key={product.ID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                      
                    <button className='addcart-btn' onClick={()=> {dispatch({type:'ADD_TO_CART',id: product.ID, product})}}> ADD TO CART</button>
                    </div>  
                ))}
            </div>
            </>
            </>
    )
}

export default Desserts;