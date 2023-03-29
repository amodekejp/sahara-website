import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Product.css';

const Drink = (props) => {
  const {name, ingredient, price, category} = props.drink
  return (
    <div>
       <div className="product shadow-2xl shadow-slate-500/50" id='product'>
      <Card sx={{maxWidth: 345}} id='product-card' >
        <CardContent className='w-full flex flex-col  items-center justify-center gap-3'>
          <Typography className='w-full flex flex-row justify-around  items-center gap-3' gutterBottom variant="h5" component="div">
            <span className='font-mono font-bold'>Category:  </span>
            <span className='text-sm text-white bg-amber-900 text-center font-mono font-bold rounded-lg py-3 px-3 '>{category.toUpperCase()}</span>
          </Typography>
          <Typography className='w-full flex flex-row justify-around items-center gap-3' gutterBottom variant="h5" component="div" >
          <span className='font-mono font-bold'>Name: </span><span className='text-sm font-mono font-bold text-white bg-amber-900 text-center rounded-lg py-3 px-3 '> {name.toUpperCase()}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <span>Ingredient:  </span><span>  {  ingredient ? ingredient :  "Not Available" }</span>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
           <span className='flex flex-row justify-center items-center pb-3 text-lg font-mono font-bold'>Price </span><span className='text-white bg-amber-900 text-center rounded-lg py-3 px-3 flex flex-row justify-center items-center'>{price}</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}

export default Drink
