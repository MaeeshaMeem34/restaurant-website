import React, { useContext, useState } from "react";
import { CartContext } from "./contexts/CartContext";
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";
import { ic_remove } from "react-icons-kit/md/ic_remove";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase";
import Navbar from "./Navbar/UserNavbar/Navbar";
import Sidebar from "./Sidebar/index";

const Cart = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(
    CartContext
  );

  

  return (
    <>
      <Navbar user={user} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <>
        {shoppingCart.length !== 0 && <h1>Cart</h1>}
        <div className="cart-container">
          {shoppingCart.length === 0 && (
            <>
              <div>
               <h3>No items in your cart or slow internet causing trouble (Refresh
                the page) or you are not logged in! </h3> 
              </div>
              <div>
                <Link to="/">  <h4>Return to Home page  </h4>  </Link>
              </div>
            </>
          )}
          {shoppingCart &&
            shoppingCart.map((cart) => (
              <div className="cart-card" key={cart.ID}>
                <div className="cart-img">
                  <img src={cart.ProductImg} alt="not found" />
                </div>

                <div className="cart-name"> {cart.ProductName} </div>

                <div className="cart-price-orignal">
                  Taka {cart.ProductPrice}.00
                </div>

                <div
                  className="inc"
                  onClick={() => dispatch({ type: "INC", id: cart.ID, cart })}
                >
                  <Icon icon={ic_add} size={24} />
                </div>

                <div className="quantity">{cart.qty}</div>

                <div
                  className="dec"
                  onClick={() => dispatch({ type: "DEC", id: cart.ID, cart })}
                >
                  <Icon icon={ic_remove} size={24} />
                </div>

                <div className="cart-price">Taka {cart.TotalProductPrice}.00</div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.ID, cart })
                  }
                >
                  <Icon icon={iosTrashOutline} size={24} />
                </button>
              </div>
            ))}
          {shoppingCart.length > 0 && (
            <div className="cart-summary">
              <div className="cart-summary-heading">Cart-Summary</div>
              <div className="cart-summary-price">
                <span>Total Price</span>
                <span>{totalPrice}</span>
              </div>
              <div className="cart-summary-price">
                <span>Total Quantity</span>
                <span>{totalQty}</span>
              </div>
              <Link to="/cashout" className="cashout-link">
                <button
                  className="btn btn-success btn-md"
                  style={{ marginTop: 5 + "px" }}
                >
                  Cash on delivery
                </button>
              </Link>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Cart;
