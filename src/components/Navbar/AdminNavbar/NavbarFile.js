import React from 'react'
import { Bars, Nav, NavIcon, NavLink , Navp, Navp1} from './NavbarElement'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav> 
            <div>
                <Navp to= '/login'> Login </Navp>
                <Navp1 > SignUp </Navp1>  

                </div>

        
            <NavLink to='/'> pizzaa</NavLink>

           
            
            <NavIcon onClick={toggle}> 
                <p>Menu</p>
                <Bars />
            </NavIcon>
             </Nav>
        </>
    )
}

export default Navbar;
