import React,{useContext} from 'react'
import { PizzaContext } from '../contexts/ProductContext/PizzaContext';
import "./Pizzas.css";


const Pizzas = () => {
    const { pizzas } = useContext(PizzaContext);

    

    return (
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
                        <button className='addcart-btn'>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Pizzas;
