import React from 'react';
import './App.css';
import CountryList from './Country-list'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  CountryList: []
}
function reducer(state, action){
  switch(action.type) {
    case 'SET_COUNTRY_LIST' : {
      return {...state, CountryList: action.payload}
    }
    default: {
      return state
    } 
  }
  return state
}
const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList/>
      </div>
    </Provider>
  );
}

export default App;
