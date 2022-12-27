import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    console.log(props)
    const {name ,  quantity} = props.product;
    return (
        <div className='orderReview'>
            <h1>this is a review items</h1>
            <h2>{name}</h2>
            <h5>Quantity : {quantity}</h5>
            <br />
            <button>Remove</button>
        </div>
    );
};

export default ReviewItem;