import React,{useContext, useState} from 'react'
import { PizzaContext } from '../contexts/ProductContext/PizzaContext';
import {CartContext} from '../contexts/CartContext'
import "./Pizzas.css";
import Navbar  from '../Navbar/UserNavbar/Navbar';
import Sidebar from "../Sidebar/index";
import {FooterContainer} from "../Footer";




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
            
            
         <>
        {pizzas.length !== 0 && <h1>Pizzas</h1>}
        <div className="products-container">
          {pizzas.length === 0 && (
            <div>slow internet...no products to display</div>
          )}
          {pizzas.map((product) => (
            <div className="product-card" key={product.ID}>
              <div className="product-img">
                <img src={product.ProductImg} alt="not found" />
              </div>
              <div className="product-name">{product.ProductName}</div>
              <div className="description"> {product.ProductDescription}</div>
              <div className="product-price">Rs {product.ProductPrice}.00</div>

              <button
                className="addcart-btn"
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", id: product.ID, product });
                }}
              >
                {" "}
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

        <FooterContainer />
      </>


         
           
            </>
    )
}

export default Pizzas;
