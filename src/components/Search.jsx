import React from 'react';
import TextField from '@mui/material/TextField';
// import { FormControl, Input } from '@mui/material';

const Search = ({ setDrinks, drinks }) => {
  const handleSearch = (e) => {
    setDrinks(drinks.filter((drinkList) => (
      drinkList.category.toLowerCase().includes(e.target.value.toLowerCase())
    )));
  };
  return (
    <div className='w-2/5 pb-2'>
      <TextField
        onChange={handleSearch}
        id="standard-basic"
        variant="standard"
        placeholder='Search for a drink by category example: "beer"'
        fullWidth
        className='pb-2 px-2'
      />

    </div>
  );
};

export default Search;
