import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'


const Review = () => {

    const [cart , setCart] = useState([]);

    useEffect(()=>{
             const saveCart = getDatabaseCart();
             const productKeys = Object.keys(saveCart);

             const cartProduct = productKeys.map(keys => {
                const product = fakeData.find( pd => pd.key === keys );
                product.quantity = saveCart[keys]
                return product;
             })
            setCart(cartProduct);
    }, [])
    return (
        <div className='review'>
            <h1>Order review : {cart.length} </h1>
            {
                cart.map( pd => <ReviewItem product={pd}></ReviewItem>)
            } 
        </div>
    );
};

export default Review;