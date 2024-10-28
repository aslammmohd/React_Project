import React from 'react';
import { useDispatch } from 'react-redux';

const products = [
  { id: 1, name: 'DUSTER', price: 500000 },
  { id: 2, name: 'KWID', price: 700000 },
  { id: 3, name: 'RENAULT', price: 800000 },
  { id :4,name:'KIGER',price:550000},
  { id :5,name:'TRIBER',price:850000}
];

function ProductList() {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h1>Vehicles Available:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} >
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)} >Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
