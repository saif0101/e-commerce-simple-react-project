import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart,setCart] = useState([]);
    const removeItem = (productkey) =>{
        const newCart = cart.filter(pd => pd.id !== productkey );
        setCart(newCart);
        removeFromDatabaseCart(productkey);

    }
    useEffect( ()=>{
        const savedCart = getDatabaseCart();
        const productKeys =  Object.keys (savedCart);
        const cartProducts = productKeys.map (key => {
            const dbProduct = fakeData.find ( pd => pd.id === key);
            dbProduct.quantity = savedCart[key];
            return dbProduct;
        });
        setCart(cartProducts);

    },[])
    return (
        <div className='shop-container'>
           <div className='product-container'>
              
           {
               cart.map ( pd => <ReviewItem removeItem= {removeItem} product ={pd}></ReviewItem>)
            }
           </div>
           <div className='cart-container'>
            <Cart cart ={cart}></Cart>
           </div>
        </div>
    );
};

export default Review;