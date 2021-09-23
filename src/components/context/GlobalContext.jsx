import React, { createContext, useReducer } from 'react'
import GlobalReducer from './GlobalReducer'

const initialState = {
  user: null,
  searchTerm: '',
  locationDialogue: {
    id: null,
    open: false,
  },

  cityEdit: {
    id: null,
    open: false,
  },

  // deleteCity: false,
  // deleteLocation: false,
  // cityAlert: false,
  // locationAlert: false,
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  console.log(state.cityAlert)


  function addUser(user) {
    console.log(user)

    dispatch({
      type: 'ADD_USER',
      payload: user,
    })
  }

  function addSearchTerm(searchTerm) {
    dispatch({
      type: 'ADD_SEARCH_TERM',
      payload: searchTerm,
    })
  }

  function toggleLocationDialoge(locationDialogue) {
    dispatch({
      type: 'TOGGLE_LOCATION_DIALOGUE',
      payload: locationDialogue,
    })
  }

  function toggleCityEdit(cityEdit) {
    dispatch({
      type: 'TOGGLE_CITY_EDIT',
      payload: cityEdit,
    })
  }

  function toggelCityDelete(deleteCity) {
    dispatch({
      type: 'TOGGLE_DELETE_CITY',
      payload: deleteCity,
    })
  }

  // function toggleCityAlert(cityAlert) {
  //   console.log(cityAlert)
  //   dispatch({
  //     type: 'TOGGLE_CITY_ALERT',
  //     payload: cityAlert,
  //   })
  // }

  // function toggelLocationDelete(deleteLocation) {
  //   dispatch({
  //     type: 'TOGGLE_DELETE_LOCATION',
  //     payload: deleteLocation,
  //   })
  // }

  // function toggleLocationAlert(locationAlert) {
  //   dispatch({
  //     type: 'TOGGLE_LOCATION_ALERT',
  //     payload: locationAlert,
  //   })
  // }

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        searchTerm: state.searchTerm,
        locationDialogue: state.locationDialogue,
        cityEdit: state.cityEdit,
        // deleteCity: state.deleteCity,
        // cityAlert: state.cityAlert,
        // deleteLocation: state.deleteLocation,
        // cityAlert: state.locationAlert,
        addUser,
        addSearchTerm,
        toggleLocationDialoge,
        toggleCityEdit,
        toggelCityDelete,
        // toggleCityAlert,
        // toggelLocationDelete,
        // toggleLocationAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
