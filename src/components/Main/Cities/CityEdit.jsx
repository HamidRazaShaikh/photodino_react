import React, { useState, useContext, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { GlobalContext } from '../../context/GlobalContext'
import Divider from '@mui/material/Divider'
import { getCityDetail } from '../../Api/Api'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import axios from 'axios'

export default function CityEdit() {
  const { cityEdit } = useContext(GlobalContext)
  const { toggleCityEdit } = useContext(GlobalContext)
  const [cityDetail, setCityDetail] = useState([])

  const id = cityEdit?.id

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await getCityDetail(id)
        setCityDetail(data)
      }
    }

    fetchData()
  }, [])

  console.log(cityDetail)

  const handleClose = () => {
    toggleCityEdit({ id: null, open: false })
  }

  // for format

  const [updatedDetail, setUpdatedDetail] = useState({
    id: '',
    locations: [],
    name: '',
    code: '',
    time_added: '12pm',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

      await axios
        .put(`https://api.photodino.com/locations/cities/${id}/`, updatedDetail)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    

    

    handleClose()
  }

  const inputFunction = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    setUpdatedDetail((prval) => {
      return {
        ...prval,
        [name]: value,
      }
    })
  }

  return (
    <div>
      <Dialog open={cityEdit.open} onClose={handleClose}>
        <DialogTitle>Edit city</DialogTitle>
        <Divider />
        <DialogContent>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="name"
                  name="name"
                  value={updatedDetail.name}
                  autoComplete="email"
                  onChange={inputFunction}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="code"
                  value={updatedDetail.code}
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
              Update
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}
