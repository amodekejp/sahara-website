import React, { useState } from 'react'
import mmanya from './Drinksdata';
import Drink from './Drink';
import './Products.css'
import Search from './Search';

const Drinks = () => {
    const drinks = mmanya
    const [drinksToRender, setDrinksToRender] = useState(drinks);
  return (
    <div  className='flex flex-col  justify-center items-center  p-8 mt-16'>
     <Search drinks={drinks} setDrinks={setDrinksToRender}/>
    <div className="grid grid-cols-3 justify-center items-center bg-inherit  gap-8 px-1" id='products'>
      {!drinksToRender.length  ?  <p className='text-center w-screen font-mono font-bold text-lg text-gray-800 '>CATEGORY NOT FOUND</p> :  drinksToRender.map((drink) => (
        <Drink key={drink.id} drink={drink} />
      ))}
    </div>
    </div>
  )
}

export default Drinks;
