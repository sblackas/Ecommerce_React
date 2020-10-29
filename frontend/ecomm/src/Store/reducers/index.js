import {combineReducers} from 'redux';
import userReducer from './user';
import productsReducer from './products'


export default combineReducers(
     {
        userReducer,
        productsReducer
    }
)