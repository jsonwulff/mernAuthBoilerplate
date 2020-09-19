import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

// STORE -> GLOBALIZED STATE

// ACTION FX INCREMENT
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// REDUCER - state = the intial state which has to be set lik state = initialState
const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: initialState.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: initialState.count - 1,
      };
    default:
      return state;
  }
};

// DISPATCH

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
