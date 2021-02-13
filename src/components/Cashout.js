import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../Firebase";
import { CartContext } from "./contexts/CartContext";

import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar/UserNavbar/Navbar";
import emailjs from "emailjs-com";

const Cashout = ({ user }) => {
  const history = useHistory();

  const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(
    CartContext
  );

  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("UserData")
          .doc(user.uid)
          .onSnapshot((snapshot) => {
            setName(snapshot.data().Name);
            setEmail(snapshot.data().Email);
          });
      } else {
        history.push("/login");
      }
    });
  });

  const cashoutSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j8cacbl",
        "template_pgovsj5",
        e.target,
        "user_Wvt2ms2bgFZcR33h4rXh4"
      )
      .then(
        (result) => {
          console.log(result.text + "msg sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    auth.onAuthStateChanged((user) => {
      if (user) {
        const date = new Date();
        const time = date.getTime();
        db.collection("Buyer-info " + user.uid)
          .doc("_" + time)
          .set({
            BuyerName: name,
            BuyerEmail: email,
            BuyerCell: cell,
            BuyerAddress: address,
            BuyerPayment: totalPrice,
            BuyerQuantity: totalQty,
          })
          .then(() => {
            setCell("");
            setAddress("");
            dispatch({ type: "EMPTY" });
            setSuccessMsg(
              "Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds"
            );
            setTimeout(() => {
              history.push("/");
            }, 5000);

            //send email
          })
          .catch((err) => setError(err.message));
      }
    });
  };

  //  if (props.data == undefined){
  //      return (<div>Loading... Please wait</div>)
  // }

  return (
    <>
      <Navbar user={user}/>

      <div className="container">
        <br />
        <h2>Cashout Details</h2>
        <br />
        {successMsg && <div className="success-msg">{successMsg}</div>}
        <form
          autoComplete="off"
          className="form-group"
          onSubmit={cashoutSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            required
            name="name"
            value={name}
           
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            required
            name="email"
            value={email}
            
          />
          <br />
          <label htmlFor="Cell No">Item Name</label>

          {shoppingCart &&
            shoppingCart.map((cart) => (
              <div className="cart-name">
                <input
                  type="text"
                  className="form-control"
                  required
                  
                  value={cart.ProductName}
                  name="ItemName"
                />{" "}
              </div>
            ))}
          <br />

          <label htmlFor="Cell No">Cell No</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setCell(e.target.value)}
            value={cell}
            name="cell"
          />
          <br />
          <label htmlFor="Delivery Address">Delivery Address</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            name="address"
          />
          <br />
          <label htmlFor="Price To Pay">Price To Pay</label>
          <input
            type="number"
            className="form-control"
            required
            value={totalPrice}
            disabled
          />
          <br />
          <label htmlFor="Total No of Products">Total No of Products</label>
          <input
            type="number"
            className="form-control"
            required
            value={totalQty}
           
          />
          <br />


          
    <div className="btn-toolbar mx-6 ">
    <button type="submit"  className="btn btn-primary btn-sm mr-4">Submit</button>
        <Link className="btn btn-default mx-6" to="/" >Cancel </Link>
     </div>
     



    



        </form>
        {error && <span className="error-msg">{error}</span>}
      </div>
    </>
  );
};

export default Cashout;
