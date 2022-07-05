import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {name,img,seller,price,stock,key} = props.product;
    return (
        <div className='product'>
           <div >
             <img src={img} alt='' />
           </div>
           <div className='product-info'>
             <h4 className='product-name'><Link className='hm' to={"/product/"+key}>{name}</Link></h4>
             <p>by : <span>{seller}</span> </p>
             <p>${price}</p>
             <p>Only {stock} left in stock-Order Soon</p>
             { props.showAddCart &&  <button className='cart-btn' onClick={()=> props.handleAddedProduct(props.product)}> 
             <FontAwesomeIcon icon={faShoppingCart} />  add to cart
             </button>}
           </div>
        </div>
    );
};

export default Product;