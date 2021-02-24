import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import { useAuth } from "../../contexts/AuthContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import {GiChiliPepper} from "react-icons/gi"




const Navbar = ({ toggle, user }) => {


  const history = useHistory();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [error, setError] = useState("");

  const { logout } = useAuth();

  const { totalQty } = useContext(CartContext);

  const handleLogout = async () => {
    setError("");
    try {
      await logout().then(() => {
        history.push("/login");
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = (e) => {
    setDropdown(true);
  };

  const onMouseLeave = (e) => {
    setDropdown(false);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          {" "}
          Chef Chili{" "}
          <GiChiliPepper/>
        </Link>

       

        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
            {user == "admin" ? (
              <Link to="/admindashboard" className="nav-links" onClick={closeMobileMenu}>
                
                Dashboard
              </Link>
            ) :  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
           
            Home
          </Link>}
          </li>
         
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="nav-links" onClick={closeMobileMenu}>
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link to="/feedback" className="nav-links" onClick={closeMobileMenu}>
              
              Feedback
            </Link>
          </li>
        

          <li className="nav-item">
            {user ? (
              <Link to="/" className="nav-links" onClick={handleLogout}>
                Log out
              </Link>
            ) : null}
          </li>

      

          <li className="nav-item">    {user ? "Welcome "+ user+"!" : <Button />}</li>
        </ul>

        <li className="nav-item">
          <Link to="/cart" className="nav-cartIcon">
            <Icon icon={cart} size="25px"/>
           
          </Link>
          <div style={{paddingLeft: "125px",paddingBottom:"34px"}}>
          {totalQty}
          </div>
        </li>

        <li className="nav-item">
          <p className="nav-p" onClick={toggle}>
            Menu
          </p>
        
        </li>
      </nav>
    </>
  );
};

export default Navbar;
