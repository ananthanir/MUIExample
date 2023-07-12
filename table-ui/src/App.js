import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          1. Number & Name of the Grama/Block/District Panchayat Constituency/Municipal Ward (In Block Letters)
        </Grid>
        <Grid item xs={6}>
          : number ariyilla, name.. athum ariyilla, backium ariyilla
        </Grid>

        <Grid item xs={6}>
          2. Date of Poll
        </Grid>
        <Grid item xs={6}>
          : !947 Aug 15
        </Grid>

        <Grid item xs={6}>
          3. Polling Station Number
        </Grid>
        <Grid item xs={6}>
          : 67868
        </Grid>

        <Grid item xs={6}>
          <Typography pl={2}> Whether located in —</Typography>

        </Grid>
        <Grid item xs={6}>

        </Grid>

        <Grid item xs={6}>
          <Typography pl={4}>(i) Government or quasi-Government building</Typography>
        </Grid>
        <Grid item xs={6}>
          : Nop
        </Grid>

        <Grid item xs={6}>
          <Typography pl={4}>(ii) Private Building</Typography>
        </Grid>
        <Grid item xs={6}>
          : Nop
        </Grid>

        <Grid item xs={6}>
          <Typography pl={4}>(iii) Temporary Structure</Typography>
        </Grid>
        <Grid item xs={6}>
          : Kinda
        </Grid>

      </Grid>
    </Box>
  );
}