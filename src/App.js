import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Eror from './components/Error/Eror';
import ProductDetails from './components/productDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/Shop" element={<Shop />} />
          <Route path='review' element={<Review/>}/>
          <Route path='manage' element={<Inventory/>}/>
          <Route path='/' element={<Shop/>}/>
          <Route path='/product/:productKey' element={<ProductDetails/>}/>
          <Route path='*' element={<Eror/>}/>
        </Routes> 
      </Router>






    </div>
  );
}

export default App;
