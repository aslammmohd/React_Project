import { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart'; // Import the Cart component

function App() {
  return (
    <>
    <div className='app-container'>
      <ProductList />
      <Cart />
      </div>
    </>
  );
}

export default App;
