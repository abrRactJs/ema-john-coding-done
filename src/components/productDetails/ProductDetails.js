import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetails.css';

const ProductDetails = () => {
   const {productKey} = useParams();
   const productDetails2= fakeData.find( pd => pd.key === productKey);
   
    return (
        <div className='productDetails'>
            <Product showAddToCart={false} product={productDetails2}></Product>
        </div>
    );
};

export default ProductDetails;