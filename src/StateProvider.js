import React, { createContext, useReducer , useContext } from "react";

//Prepare the Datalayer
export const StateContext = createContext();

//Wrap our App and provide the Data Layer
 
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);
 
//pull information from Data Layer

export const useStateValue = () => useContext(StateContext);

