import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress'




export default function Loadingstate() {
    return (
        <Container
          maxWidth="sm"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid>
            <CircularProgress style={{ height: 100, width: 100 }} />
          </Grid>
        </Container>    )
}
