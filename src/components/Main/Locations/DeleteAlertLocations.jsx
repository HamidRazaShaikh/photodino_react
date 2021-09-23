import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { GlobalContext } from '../../context/GlobalContext'

export default function AlertDialog({WantDelete, toggleAlert}) {
  const [open, setOpen] = React.useState(true)
  
  const handleClose = (e) => {
    console.log(e.target.value)
    const value = e.target.value

    if (value === 'yes') {
      console.log('deleted');
      WantDelete(true);
      toggleAlert()
      
      setOpen(false)
    } else {
      console.log('not deleted');
      WantDelete(false);
      toggleAlert()
      

      setOpen(false)
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete this location ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} value="yes">
            Yes
          </Button>
          <Button onClick={handleClose} value="no" autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
