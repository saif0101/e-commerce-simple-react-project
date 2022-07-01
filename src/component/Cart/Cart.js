import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalprice = cart.reduce ((total,item)=> total+ item.price,0);
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
        <div >
           <div className='cart-info'>
           <h4 style={{marginLeft:'45px'}}>Order Summary</h4>
            <p style={{marginLeft: "50px"}}>Items Ordered    : {cart.length}</p>
            <p>Product Price    : $ { formatPrice(totalprice)}</p>
            <p>  Tax.+Vat : $ {tax}</p>
            <p>Shiping Cost : $ {shiping}</p>
            <h3>Total Price : $ {formatPrice(total)}</h3>
            <button className='review-btn'> Review Order</button>
           </div>
        </div>
    );
};

export default Cart;