import {combineReducers} from 'redux';
import universityReducer from '../../features/home/redux/universityReducer';

const reducerMap = {
    universityStore: universityReducer
};

export default combineReducers(reducerMap);