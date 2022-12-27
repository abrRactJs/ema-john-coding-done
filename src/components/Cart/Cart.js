import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    
     
let total = Math.round(0+0);
    // for(let i=0; i<cart.length;i++){
    //          let product = cart[i];
    //          total = total + product.price;
    // }

  cart.map(pro => {
     return total = total + pro.price
  });

  let shipping= Math.round(12.99);
  if(total < 20){
    shipping = 0;
  }else if(total > 20){
     shipping = 15.99;
  }else if(total>50){
    shipping = 20.88;
  };

   const tax = Math.round(total/10);
   const grandTotal = (total +shipping + tax).toFixed(2)
    return (
        <div className='cart-part'>
             <h3>Ordered Summary</h3>
             <p>Items Order : {cart.length} </p>
             <p>Product Price : {total} $</p>
             <p>Shipping : {shipping} $</p>
             <p>Tax + VAT: {tax} $ </p>
             <p>Price : {grandTotal} $</p>
            <Link to={"/review"}>
              <button>Review your Product</button>
            </Link>
        </div>
    );
};

export default Cart;