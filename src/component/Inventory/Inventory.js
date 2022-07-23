import React from 'react';
import fakeData from '../../fakeData/products.json';

const Inventory = () => {
  const handleProduct =()=>{
    fetch ('http://localhost:5000/addProducts',{
      method :"POST",
      headers: {'Content-Type': 'application.json'},
      body:JSON.stringify(fakeData[1])
    })
  }
    return (
        <div>
         <button onClick ={handleProduct}>Add Product</button>
            
        </div>
    );
};

export default Inventory;