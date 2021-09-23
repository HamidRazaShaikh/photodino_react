import React, { useContext, useEffect } from 'react'
import Signin from '../SignIn/Signin'
import Cities from './Cities/Cities'
import Locations from './Locations/Locations'
import CityDetail from './Cities/CityDetail';
import LocationDetail from './Locations/LocationDetail';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Appbar from './Appbar/Appbar'
import { GlobalContext } from '../context/GlobalContext';
import CityEdit from './Cities/CityEdit';
import AddCity from './Cities/AddCity';

const theme = createTheme()

export default function Main() {
  const {user} = useContext(GlobalContext);
  const stored = localStorage.getItem('user')



  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Router>
          {stored !==null  ? <Appbar /> : null}
          <LocationDetail/>
          <CityEdit/>

          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/cities">
              <Cities />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>

            <Route path="/cityDetail/:id">
              <CityDetail />
            </Route>

            <Route path="/addcity">
              <AddCity/>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}
