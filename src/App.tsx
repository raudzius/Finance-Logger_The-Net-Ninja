import { Container, Typography } from '@mui/material';
import Form from 'components/Form';
import LogList from 'components/LogList';
import React from 'react';

const App = () => (
  <Container component="main" maxWidth={false} disableGutters sx={{ textAlign: 'center' }}>
    <Typography component="h1" variant="h3" color="primary" sx={{ my: 10 }}>
      Finance Logger
    </Typography>
    <LogList />
    <Form />
  </Container>
);

export default App;
