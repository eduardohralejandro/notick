import addItemReducer from './stickyNote';
import { combineReducers } from 'redux';


const allReducers = combineReducers({ addItem: addItemReducer });


export default allReducers;