import { Add } from '@mui/icons-material';
import {
 Box, Button, InputAdornment, MenuItem, TextField,
} from '@mui/material';
import Invoice from 'classes/Invoice';
import Log from 'classes/Log';
import Payment from 'classes/Payment';
import MainContext from 'contexts/MainContext';
import HasFormatter from 'interfaces/HasFormatter';
import React from 'react';

const Form: React.FC = () => {
  const { addLog } = React.useContext(MainContext);

  const [type, setType] = React.useState('invoice');
  const [toFrom, setToFrom] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [amount, setAmount] = React.useState<'' | number>('');
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type === 'invoice') {
      doc = new Invoice(toFrom, details, Number(amount));
    } else {
      doc = new Payment(toFrom, details, Number(amount));
    }

    addLog(new Log(doc, type, 'end'));
  };

  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4,
        py: 10,
        backgroundColor: '#eeeeee',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="type"
        select
        label="Type"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
        variant="filled"
        size="small"
        sx={{ width: 108 }}
      >
        <MenuItem value="invoice">Invoice</MenuItem>
        <MenuItem value="payment">Payment</MenuItem>
      </TextField>
      <TextField
        id="to-from"
        label="To / From"
        variant="filled"
        size="small"
        value={toFrom}
        onChange={(e) => {
          setToFrom(e.target.value);
        }}
      />
      <TextField
        id="details"
        label="Details"
        variant="filled"
        size="small"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      />
      <TextField
        id="amount"
        label="Amount"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
        variant="filled"
        size="small"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <Button type="submit" variant="contained" size="large" endIcon={<Add fontSize="inherit" />}>
        Add
      </Button>
    </Box>
  );
};

export default Form;
