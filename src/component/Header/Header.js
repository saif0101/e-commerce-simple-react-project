import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div className=' header justify-content-between'>
         {/* <img src={logo} alt="" /> */}
         <div className ='logo'>Online <span style={{color:'gold'}}>Shopping</span></div>
         <div className='navbar'> 
          <nav>
            <div>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/review">Review Order</NavLink>
            <NavLink to="/manage">Manage Inventory </NavLink>
            {loggedInUser.email? <button onClick={()=>setLoggedInUser({})}>Sign Out</button> : <NavLink to="/login">Sign In</NavLink>}
            {/* {loggedInUser.email? <h3 style={{color:'yellow',fontSize:'20px'}}>User: {loggedInUser.email}</h3> : <h3></h3> } */}
            </div>
  
          </nav>
          </div>
        </div>
    );
};

export default Header;