import React from 'react';
import TextField from '@mui/material/TextField';
// import { Badge } from 'react-bootstrap';
// import { FormControl, Input } from '@mui/material';

const FoodSearch = ({ setFoods, foods }) => {
  const handleSearch = (e) => {
    setFoods(foods.filter((foodList) => (
      foodList.name.toLowerCase().includes(e.target.value.toLowerCase())
    )));
  };
  return (
    <div className='w-2/5 pb-2'>
      <TextField
        onChange={handleSearch}
        id="standard-basic"
        variant="standard"
        placeholder='Search for food by name example: "Rice"'
        fullWidth
        className='pb-2 px-2'
      />

    </div>
  );
};

export default FoodSearch;
