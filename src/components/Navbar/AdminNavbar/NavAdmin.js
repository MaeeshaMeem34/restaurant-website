import React from 'react'
import { Link } from 'react-router-dom'
import { Bars, Nav, NavIcon, NavLink , Navp, Navp2} from './NavbarElement'

const NavAdmin = ({toggle}) => {
    return (
        <>
        <Nav> 
            <div >
                <Navp to= '/login'> Login </Navp>
                <Navp2 to= '/admindashboard'> Dashboard </Navp2>
              
              
                  

                </div>
               

        
            <NavLink to='/admin'> pizzaa</NavLink>
          

           
            
            <NavIcon onClick={toggle}> 
                <p>Menu</p>
                <Bars />
            </NavIcon>
             </Nav>
        </>
    )
}

export default NavAdmin;