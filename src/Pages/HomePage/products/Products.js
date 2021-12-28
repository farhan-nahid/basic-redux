import React from 'react';
import { useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions/fruitAction';

const Products = () => {
  const fruits = useSelector((state) => {
    return state.products;
  });

  return (
    <div>
      <h1>product</h1>
      {fruits?.map((fruit) => (
        <div key={fruit.id} className='card'>
          <h1>{fruit.name}</h1>
          <h3>${fruit.price}</h3>
          <button onClick={() => addToCart(fruit)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
