//This is needed to track the basket
import React, { useContext, useReducer, createContext } from 'react';

//DataLayer created
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//How we use it inside of a component
export const useStateValue = () => useContext(StateContext);
