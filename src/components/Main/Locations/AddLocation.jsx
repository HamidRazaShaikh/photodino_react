import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import useAnimation from '../../Animations'
import axios from 'axios'

export default function AddLocation() {
  const [LocationInfo, setLocationInfo] = useState({
    name: '',
    rent : '',
    email: '',
    phone : '',
    coordinates : '',
    street_number : '',
    street_name:'',
    postal_code :'',
    status  :'available',
    city : '',
    code: '',
  })
  const [BackInDown, BackInUp] = useAnimation()

  const handleSubmit = (e) => {
    e.preventDefault();

    const addLocation = async () => {
        await axios
          .post('https://api.photodino.com/locations/locations/', LocationInfo)
          .then((response) => console.log(response))
          .catch((error) => console.log(error))
      }

      addLocation()
    
  }

  const inputFunction = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    setLocationInfo((prval) => {
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
              New location
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              color="primary"
            >
              Please fill the desired fields to add location
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="sm">
          {/* End hero unit */}

          <Grid container>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm = {6}>
                  <TextField
                    required
                    fullWidth
                    label="name"
                    name="name"
                    value={LocationInfo.name}
                    onChange={inputFunction}
                  />
                </Grid>

                <Grid item xs={12} sm = {6}>
                  <TextField
                    required
                    fullWidth
                    label="Rent"
                    name="Rent"
                    value={LocationInfo.name}
                    onChange={inputFunction}
                  />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="code"
                    value={LocationInfo.code}
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
