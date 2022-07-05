import React from 'react';

import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalprice = cart.reduce ((total,item)=> total+ (item.price*item.quantity),0);
    // let totalprice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const element = cart[i];
    //      totalprice = totalprice + element.price;
    // }
    let shiping = 0;

    if ( totalprice>35) {
        shiping =6;

    }
    else if( totalprice >15){
        shiping = 10;
    }
    else if ( totalprice >0){
        shiping =12.99
    }
 

    const tax = (totalprice/10).toFixed(2);
    const total =(totalprice +shiping + Number(tax));

    const formatPrice = number => {
        const precision = number.toFixed(2);
        return Number(precision);
    };

 
 
    return (
        <div className='cart-info' >
           <div >
           <h4>Order Summary</h4>
            <p >Items Ordered    : {cart.length}</p>
            <p>Product Price    : $ { formatPrice(totalprice)}</p>
            <p>  Tax.+Vat : $ {tax}</p>
            <p>Shiping Cost : $ {shiping}</p>
            <h5>Total Price : $ {formatPrice(total)}</h5>
            {
            props.children
            }
           </div>
        </div>
    );
};

export default Cart;