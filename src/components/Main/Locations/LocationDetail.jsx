import React, { useState, useContext, useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { GlobalContext } from '../../context/GlobalContext'

import axios from 'axios'

export default function LocationDetail() {
  const { locationDialogue } = useContext(GlobalContext)
  const { toggleLocationDialoge } = useContext(GlobalContext)
  const [details, setDetails] = useState([])

  const handleClose = () => {
    toggleLocationDialoge({ id: null, open: false })
  }

  const fetchData = async () => {
    const id = locationDialogue?.id
    const response = await axios.get(
      `https://api.photodino.com/locations/locations/${id}`,
    );

    setDetails(response.data)

  }

  fetchData();

  console.log(details)

  return (
    <div>
      <Dialog open={locationDialogue.open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
