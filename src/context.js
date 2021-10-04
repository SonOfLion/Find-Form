import React,{ createContext, useReducer } from 'react';

const initialState = {
  track: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "trackInput": {
      const newInput = {
        text: action.payload
      };
      return {
        ...state,
        track: [...state.track, newInput]
      }
    }
    default:
      return state
  }
};

export const TrackInput = createContext();

export const TrackProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <TrackInput.Provider value={ value }>{ children}</TrackInput.Provider>
  );
};