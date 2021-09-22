import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
  user: null,
  searchTerm : '',
  locationDialogue : {

    id : null,
    open : false
  },

  cityEdit : {

    id : null,
    open : false
  },
  

};

console.log(initialState);

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function addUser(user) {
    console.log(user);


    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  }


  function addSearchTerm(searchTerm) {


    dispatch({
      type: "ADD_SEARCH_TERM",
      payload: searchTerm,
    });
  }

  function toggleLocationDialoge(locationDialogue) {



    dispatch({
      type: "TOGGLE_LOCATION_DIALOGUE",
      payload: locationDialogue,
    });
  }

  function toggleCityEdit (cityEdit) {



    dispatch({
      type: "TOGGLE_CITY_EDIT",
      payload: cityEdit,
    });
  }


  






  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        searchTerm : state.searchTerm,
        locationDialogue : state.locationDialogue,
        cityEdit : state.cityEdit,
        addUser,
        addSearchTerm,
        toggleLocationDialoge,
        toggleCityEdit
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
