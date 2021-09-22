import React, { useState, useContext, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { GlobalContext } from '../../context/GlobalContext'
import Divider from '@mui/material/Divider'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getCityDetail } from '../../Api/Api'

export default function CityEdit() {
  const { cityEdit } = useContext(GlobalContext)
  const { toggleCityEdit } = useContext(GlobalContext)
  const [value, setValue] = useState(0)

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
  }, [cityEdit])

  console.log(cityDetail)

  const handleClose = () => {
    toggleCityEdit({ id: null, open: false })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // tabs function

  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <div>
      <Dialog open={cityEdit.open} onClose={handleClose}>
        <DialogTitle>Edit city</DialogTitle>
        <Divider />
        <DialogContent>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Update" {...a11yProps(0)} />
                <Tab label="Delete" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              update
            </TabPanel>
            <TabPanel value={value} index={1}>
              delete{' '}
            </TabPanel>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
