import React, { useState, useContext, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { GlobalContext } from '../../context/GlobalContext'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

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

    if (id) {
      const response = await axios.get(
        `https://api.photodino.com/locations/locations/${id}`,
      )

      setDetails(response.data)
    }
  }

  fetchData()

  console.log(details)

  return (
    <div>
      <Dialog open={locationDialogue.open} onClose={handleClose}>
        <DialogTitle>Hotel Detail</DialogTitle>
        <Divider />
        <DialogContent>
        <table>
        <tbody>


            <tr>
              <td>ID</td>
              <td>{details?.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{details?.name}</td>
            </tr>

            <tr>
              <td>Rent</td>
              <td>$ {details?.rent}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{details?.phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{details?.email}</td>
            </tr>
            <tr>
              <td>Street</td>
              <td>{details?.street_name + ',' + details?.street_number}</td>
            </tr>
            <tr>
              <td>Postal Code</td>
              <td>{details?.postal_code}</td>
            </tr>
            <tr>
              <td>status</td>
              <td>{details?.status}</td>
            </tr>
            </tbody>

            </table>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
