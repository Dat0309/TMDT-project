import React, { createContext, useContext, useReducer } from 'react'

// prepare the datalayeer
export const StateContext = createContext();

// wrap our app and prrovider the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull infomaion from the data layer
export const useStateValue = () => useContext(StateContext);