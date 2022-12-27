import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (productItem)=>{
        // console.log("Product adedd", productItem);
        const newCart = [...cart, productItem];
        setCart(newCart);
        const sameProdcut = newCart.filter(pd => pd.key === productItem.key);
        const count = sameProdcut.length;
        addToDatabaseCart(productItem.key, count)

    }
    return (
        <div className="shop-container">
            <div className="product-container">
          
                    {
                        products.map(pro => <Product 
                            key ={pro.key}
                            showAddToCart ={true}
                            handleAddProduct = {handleAddProduct}
                            product={pro}
                            ></Product>)
                    }
           
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;