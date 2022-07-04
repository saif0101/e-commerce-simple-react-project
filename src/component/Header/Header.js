import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className=' header justify-content-between'>
         {/* <img src={logo} alt="" /> */}
         <div className ='logo'>Online <span style={{color:'gold'}}>Shopping</span></div>
         <div className='navbar'> 
          <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Review Order</a>
            <a href="/manage">Manage Inventory </a>
          </nav></div>
        </div>
    );
};

export default Header;