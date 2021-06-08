import {combineReducers} from 'redux';
import universityReducer from './universityReducer';

const reducerMap = {
    universities: universityReducer
};

export default combineReducers(reducerMap);