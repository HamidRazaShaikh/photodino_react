const GlobalReducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'ADD_USER':
      console.log(action.payload)
      return {
        ...state,
        user: action.payload,
      }

    case 'ADD_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      }

    case 'TOGGLE_LOCATION_DIALOGUE':
      return {
        ...state,
        locationDialogue: action.payload,
      }

    case 'TOGGLE_CITY_EDIT':
      return {
        ...state,
        cityEdit: action.payload,
      }

    default:
      return state
  }
}

export default GlobalReducer
