import { Add } from '@mui/icons-material';
import {
 Box, Button, InputAdornment, MenuItem, TextField,
} from '@mui/material';
import React from 'react';

const Form = () => {
  const [type, setType] = React.useState('invoice');
  const handleSubmit = () => {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
 display: 'flex', justifyContent: 'center', gap: 4, py: 10, backgroundColor: '#eeeeee',
}}
    >
      <TextField
        id="type"
        select
        label="Type"
        value={type}
        onChange={handleChange}
        variant="filled"
        size="small"
        sx={{ width: 108 }}
      >
        <MenuItem value="invoice">Invoice</MenuItem>
        <MenuItem value="payment">Payment</MenuItem>
      </TextField>
      <TextField id="to-from" label="To / From" variant="filled" size="small" />
      <TextField id="details" label="Details" variant="filled" size="small" />
      <TextField
        id="amount"
        label="Amount"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
        variant="filled"
        size="small"
      />
      <Button variant="contained" size="large" endIcon={<Add fontSize="inherit" />}>Add</Button>
    </Box>
  );
};

export default Form;
