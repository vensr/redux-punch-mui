import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Grid} from '@mui/material';

function Copyright () {
  return (
    <Typography variant="body2" color="text.secondary">
      {' Copyright © '}
      {new Date ().getFullYear ()}
      {' All Rights Reserved - Strictly Confidential'}
      {'.'}
    </Typography>
  );
}

export default function Footer () {
  return (
    <Box mt={4}>
      <Container
        maxWidth="mx"
        component="footer"
        sx={{
          bottom: 0,
          position: 'fixed',
          width: '100%',
          marginTop: 'calc(10% + 60px)',
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Copyright  />
        </Grid>

      </Container>
    </Box>
  );
}
