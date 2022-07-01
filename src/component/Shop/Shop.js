import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';



const Shop = () => {
    const shuffle = a =>{
        for (let i = 0; i < a.length; i++) {
            let j = Math.floor(Math.random()*i);
            [a[i-1],a[j]] = [a[j],a[i-1]];
            
        }

    }
     shuffle(fakeData)
    
  const first10 =  fakeData.slice(0,10);
   const  [ products, setProducts]= useState(first10);
   const [cart,setCart] = useState([]);

   const handleAddedProduct =(productadd)=>{
    console.log('porduct added',productadd);
    const newCart =[ ...cart,productadd];
    setCart(newCart);

   }

    return (
        <div className='shop-container'>
            <div className='product-container'>
           {products.map( element=> <Product product ={element}
           handleAddedProduct ={handleAddedProduct}
           > 
           </Product>) }
            </div>
            <div cart- container>
             <Cart cart ={cart}></Cart>
            </div>
           

        </div>
    );
};

export default Shop;