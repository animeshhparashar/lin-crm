import {combineReducers} from 'redux';
import authReducer from './auth';
import clientReducer from './client';
import leadReducer from './lead';
import dealReducer from './deal';
import taskReducer from './task';

export default combineReducers({
    authReducer,
    clientReducer,
    leadReducer,
    dealReducer,
    taskReducer
});