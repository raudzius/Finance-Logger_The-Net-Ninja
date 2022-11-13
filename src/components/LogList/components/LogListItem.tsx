import React from 'react';

import HasFormatter from 'interfaces/HasFormatter';
import { ListItem, Typography } from '@mui/material';

type LogListItemProps = {
  item: HasFormatter;
  heading: string;
};

const LogListItem: React.FC<LogListItemProps> = ({ item, heading }) => (
  <ListItem>
    <Typography component="h4" variant="h4">
      {heading}
    </Typography>
    <Typography component="p">{item.format()}</Typography>
  </ListItem>
);

export default LogListItem;
