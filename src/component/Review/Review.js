import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import ConfirmImage from '../../images/giphy.gif'

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);

    const handlePlaceOrder = ()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();

    }
    
    const removeItem = (productkey) =>{
        const newCart = cart.filter(pd => pd.key !== productkey );
        setCart(newCart);
        removeFromDatabaseCart(productkey);

    }
    useEffect( ()=>{
        const savedCart = getDatabaseCart();
        const productKeys =  Object.keys (savedCart);
        const cartProducts = productKeys.map (key => {
            const dbProduct = fakeData.find ( pd => pd.key === key);
            dbProduct.quantity = savedCart[key];
            return dbProduct;
        });
        setCart(cartProducts);

    },[])
    
    let thankYou;
    if(orderPlaced){
      thankYou =  <img src={ ConfirmImage} alt=""/>
    }


    return (
        <div className='shop-container'>
           <div className='product-container'>
              
           {
               cart.map ( (pd) => <ReviewItem key ={pd.key} removeItem= {removeItem} product ={pd}></ReviewItem>)
            }
             {
            thankYou
           }
           </div>
           <div className='cart-container'>

            <Cart cart ={cart}>
                <button onClick={handlePlaceOrder} className='cart-btn'> Place Order</button>
            </Cart>
           </div>
          
        </div>
    );
};

export default Review;