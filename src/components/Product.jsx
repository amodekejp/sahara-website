import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './Product.css';

const Product = props => {
  const {image, name, price} = props.food;
  return (
    <div className="product shadow-2xl shadow-slate-500/50" id="product">
      <Card sx={{maxWidth: 300}} id="product-card">
        {image ? (
          <CardMedia
            component="img"
            alt="Product Image"
            height="140"
            image={image}
          />
        ) : (
          <CardMedia
            component="img"
            alt="No Image Available"
            height="140"
            image="/no-image-available.png"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span className="text-sm font-mono font-bold text-white bg-amber-900 text-center rounded-lg py-3 px-3 ">
              {' '}{name.toUpperCase ()}
            </span>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            <span className="flex flex-row justify-center items-center pb-3 text-lg font-mono font-bold">
              Price{' '}
            </span>
            <span className="text-white bg-amber-900 text-center rounded-lg py-3 px-3 flex flex-row justify-center items-center">
              NGN{price}
            </span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;