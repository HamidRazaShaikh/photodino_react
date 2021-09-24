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
    rent: '',
    email: '',
    phone: '',
    coordinates: '',
    street_number: 0,
    street_name: '',
    postal_code: 0,
    status: 'available',
    city: 0,
  })
  const [BackInDown, BackInUp] = useAnimation()

  const handleSubmit = (e) => {
    e.preventDefault()

    const addLocation = async () => {
      const jsondata = JSON.stringify(LocationInfo)

      const input = {
        name: 'hamid',
        rent: '109.49',
        email: 'johndoe@joecorp.de',
        phone: '+49 (012) 308',
        coordinates: '49.045,10.442',
        street_number: 65,
        street_name: 'Hartmannweg',
        postal_code: 52478,
        status: 'available',
        city: 232,
      }

      const jsonInput = JSON.stringify(input)

      console.log(input)

      console.log(jsondata)
      // await axios
      //   .post('https://api.photodino.com/locations/locations/', jsonInput,   {headers: {
      //     "Content-Type": "application/json"
      //   }},
      // )
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error))

      fetch('https://api.photodino.com/locations/locations/', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      })
        .then((res) => {
          console.log(res)
        })
        // ur data is here
        .catch((err) => console.log('api Erorr: ', err))
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

  console.log(LocationInfo)

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
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="name"
                    name="name"
                    value={LocationInfo.name}
                    onChange={inputFunction}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Rent"
                    name="rent"
                    value={LocationInfo.rent}
                    onChange={inputFunction}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    value={LocationInfo.email}
                    onChange={inputFunction}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={LocationInfo.phone}
                    onChange={inputFunction}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Coordinates"
                    name="coordinates"
                    value={LocationInfo.coordinates}
                    onChange={inputFunction}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    label="Postal code"
                    name="postal_code"
                    value={LocationInfo.postal_code}
                    onChange={inputFunction}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Street name"
                    name="street_name"
                    value={LocationInfo.street_name}
                    onChange={inputFunction}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    label="Street number"
                    name="street_number"
                    value={LocationInfo.street_number}
                    onChange={inputFunction}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    label="City"
                    name="city"
                    value={LocationInfo.city}
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
