import {combineReducers} from 'redux';
import universityReducer from '../../features/home/redux/universityReducer';

const reducerMap = {
    universities: universityReducer
};

export default combineReducers(reducerMap);