import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const initialState = {
  user: null,
  searchTerm : '',
  locationDialogue : {

    id : null,
    open : false
  }
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



  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        searchTerm : state.searchTerm,
        locationDialogue : state.locationDialogue,
        addUser,
        addSearchTerm,
        toggleLocationDialoge
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
