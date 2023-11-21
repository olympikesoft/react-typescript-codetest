import React from 'react';
import { Grid } from '@mui/material';
import ListPost from '../../containers/ListPost/ListPost';
import ListComment from '../../containers/ListComment/ListComment';

const App: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <ListPost />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <ListComment />
      </Grid>
    </Grid>
  );
};

export default App;
