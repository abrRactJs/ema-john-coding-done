import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {

    const {name, img, seller, price, stock, key} = props.product;

    return (
        <div className='product'>
            <div className='pro-img'>
                <img src={img} alt="" />
            </div>
            <div className='pro-text'>
                <h3> <Link to={"/product/" + key}>{name}</Link> </h3>
                <p>by <small>{seller}</small></p>
                <h4>Price : {price}</h4>
                <p> only <span>{stock}</span> product left in Stock </p>
                {props.showAddToCart && <button
                 onClick={()=>props.handleAddProduct(props.product)}
                 >Add to Cart
                 </button>}
            </div>

        </div>
    );
};

export default Product;