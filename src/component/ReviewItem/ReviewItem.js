import React from 'react';

const ReviewItem = (props) => {
    const {name,img,quantity,price,id} = props.product;
    return (
        <div>
            <h4> <span className='justify-content- center'>Your Ordered Product Review:</span> </h4>
           
             <div className='product'>
           <div >
             <img src={img} alt='' />
           </div>
           <div className='product-info'>
             <h4 className='product-name'>{name}</h4>
             <p>${price}</p>
             <p>Quantity : {quantity}</p>
             <button 
             onClick={()=> props.removeItem(id)}
             className='cart-btn'> 
              Remove Item
             </button>
           </div>
        </div>
        </div>
    );
};

export default ReviewItem;