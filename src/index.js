import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';


const store = createStore(allReducers);


ReactDom.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById("root"));