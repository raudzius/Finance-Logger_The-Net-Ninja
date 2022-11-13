import React from 'react';

import HasFormatter from 'interfaces/HasFormatter';
import { ListItem, Typography } from '@mui/material';

type LogListItemProps = {
  item: HasFormatter;
  heading: string;
};

const LogListItem: React.FC<LogListItemProps> = ({ item, heading }) => (
  <ListItem sx={{
 display: 'block', border: 1, borderColor: '#e0e0e0', my: 2,
}}>
    <Typography component="h4" variant="h6" color="primary">
      {heading}
    </Typography>
    <Typography component="p">{item.format()}</Typography>
  </ListItem>
);

export default LogListItem;
