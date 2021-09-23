import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import useAnimation from '../../Animations'

export default function AddCity() {
  const [cityInfo, setCityInfo] = useState({})
  const [BackInDown, BackInUp] = useAnimation()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const inputFunction = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    setCityInfo((prval) => {
      return {
        ...prval,
        [name]: value,
      }
    })
  }
  return (
    <div>
      <main ref={BackInDown().ref}>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              New city
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              color="primary"
            >
              Please fill the desired fields to add city
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">
          {/* End hero unit */}

          <Grid container>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="id"
                    value={cityInfo.id}
                    required
                    fullWidth
                    label="id"
                    autoFocus
                    onChange={inputFunction}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Locations"
                    name="locations"
                    value={cityInfo.locations}
                    autoComplete="lname"
                    onChange={inputFunction}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="name"
                    name="name"
                    value={cityInfo.name}
                    autoComplete="email"
                    onChange={inputFunction}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="code"
                    value={cityInfo.code}
                    label="code"
                    autoComplete="new-password"
                    onChange={inputFunction}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ textTransform: 'none' }}
              >
                Add
              </Button>
            </Box>
          </Grid>
        </Container>
        )
      </main>
    </div>
  )
}
