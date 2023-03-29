import React, { useState } from 'react';
import './Products.css';
import FoodDb from './foodDb';
import Product from './Product';
import FoodSearch from './FoodSearch';

const Products = () => {
  const foods = FoodDb;
const [foodsToRender, setFoodsToRender] = useState(foods)

  return (
    <div className="flex flex-col  justify-center items-center  p-8 mt-16">
    <FoodSearch foods={foods} setFoods={setFoodsToRender}/>
      <div
        className="grid grid-cols-3 justify-center items-center bg-inherit  gap-8 px-1"
        id="products"
      >
        {!foodsToRender.length  ?  <p className='text-center w-screen font-mono font-bold text-lg text-gray-800 '>FOOD NOT FOUND</p> : foodsToRender.map(food => (
          <Product key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Products;
