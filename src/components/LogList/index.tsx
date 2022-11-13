import { List } from '@mui/material';
import MainContext from 'contexts/MainContext';
import React from 'react';
import LogListItem from './components/LogListItem';

const LogList = () => {
  const { logList } = React.useContext(MainContext);
  let id = 0;

  return (
    <List sx={{ mx: 20, mb: 6 }}>
      {logList.map(({ heading, item }) => {
      id += 1;
      return <LogListItem key={id} heading={heading} item={item} />;
    })}
    </List>
  );
};

export default LogList;
