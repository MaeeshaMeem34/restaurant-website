import React, { useContext } from 'react'
//import logo from '../images/ecommerce.svg'
import { Link } from 'react-router-dom'
import { auth } from '../Firebase'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from './Contexts/CartContext'

export const Navbar2 = ({user}) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }


    return (
        <div className='navbox'>
            {/* <div className='leftside'>
                <img src={logo} alt="" />
            </div> */}
            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
                <span><Link to="/cart" className='navlink'><Icon icon={cart} /></Link></span>
                <div className='relative'>
                <span className='no-of-products'>{totalQty}</span>
                </div>
            </div>}
            {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <div className='relative'>
                <span className='no-of-products'>{totalQty}</span>
                </div>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )
}