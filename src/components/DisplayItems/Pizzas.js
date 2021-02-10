import React,{useContext} from 'react'
import { PizzaContext } from '../Contexts/ProductContext/PizzaContext';
import {CartContext} from '../Contexts/CartContext'
import "./Pizzas.css";
import { Navbar } from '../Navbar/UserNavbar/Navbar'
import {Navbar2} from '../Navbar2'


const Pizzas = () => {
    const { pizzas } = useContext(PizzaContext);

    // const data = useContext(CartContext);
    // console.log(data);
    const { dispatch } = useContext(CartContext);

    

    return (
        <>
        <Navbar2/>
            <>
            
       
            {pizzas.length !== 0 && <h1>Pizzas</h1>}
            <div className='products-container'>
                {pizzas.length === 0 && <div>slow internet...no products to display</div>}
                {pizzas.map(product => (
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
<<<<<<< HEAD
                        <button className='addcart-btn'>ADD TO CART</button>
                    </div >
=======
                    <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ID, product })}>ADD TO CART</button>
                    </div>
>>>>>>> 218e2cd452b0462dd80a979705878ec86271989e
                ))}
            </div>
            </>
            </>
    )
}

export default Pizzas;
