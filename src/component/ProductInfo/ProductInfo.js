import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';

const ProductInfo = () => {
    const {productId} = useParams();
    const  product = fakeData.find( pd => pd.key === productId);
    // console.log(product);
    return (
        <div>
            <h4 style ={{textAlign:'center', marginTop: '20px'}}> Your Products detail</h4>
            <Product showAddCart={false} product ={product}></Product>
        </div>
    );
};

export default ProductInfo;