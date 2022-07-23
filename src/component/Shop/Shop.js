import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { NavLink } from 'react-router-dom';



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

   useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys (savedCart);
    const previousCart = productKeys.map ((existingkey) => {
        const product = fakeData.find ( pd => pd.key===existingkey);
        product.quantity = savedCart[existingkey];
        return product;
    })
    setCart(previousCart);

   },[])

   const handleAddedProduct =(productadd)=>{
    const toBeAdded = productadd.key;
    const sameProduct = cart.find( pd => pd.key===toBeAdded);
    let count=1;
    let newCart;
    if (sameProduct){
         count = sameProduct.quantity +1;
        sameProduct.quantity = count;
        const others = cart.filter ( pd => pd.key!==toBeAdded);
        newCart =[...others,sameProduct];
    }
    else{
        productadd.quantity =1;
        newCart = [...cart,productadd];
    }

    setCart(newCart);
    addToDatabaseCart(productadd.key,count);

   }

    return (
        <div className='shop-container'>
            <div className='product-container'>
           {
           products.map ( (element)=> 
           <Product
                key ={ element.key}
                showAddCart ={true} product ={element}
                handleAddedProduct ={handleAddedProduct}> 
           </Product>) 
           }
            </div>
            <div className='cart-container'>
             <Cart cart ={cart}>
                    <NavLink to = "/review">
                    
                        <button className='cart-btn'> Review Order</button>
                    
                    </NavLink>
             </Cart>
            </div>
           

        </div>
    );
};

export default Shop;