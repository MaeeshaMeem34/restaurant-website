import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import {useAuth } from "../../contexts/AuthContext";
import {AiOutlineShoppingCart} from "react-icons/ai"

const Navbar = ({ toggle }) => {
  const history= useHistory();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [error, setError] = useState("");

  const {currentUser, logout} = useAuth();
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
          PiZZA{" "}
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleLogout}>
             Log out
            </Link>
          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
            <Link
              
              className="nav-links"
              onClick={closeMobileMenu}
              
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              {" "}
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              {" "}
              Feedback{" "}
            </Link>
          </li>

          <li className="nav-item">

            { currentUser ?    currentUser.email : <Button /> }
            
          </li>
        </ul>
        <li className="nav-item">
           
           <Link to="/" >
           <AiOutlineShoppingCart size="30px" color="#fff" />
             </Link>  
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
