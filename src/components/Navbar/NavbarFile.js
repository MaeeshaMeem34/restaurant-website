import React from 'react'
import { Bars, Nav, NavIcon, NavLink , Navp} from './NavbarElement'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav> 
            <div><Navp to= '/'> Login </Navp> </div>
        
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
