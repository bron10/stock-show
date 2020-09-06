import { combineReducers } from 'redux';
import {stockReducer} from './stock/reducer';
import {connectionReducer} from './connection/reducer';

const rootReducer = combineReducers({
    stock: stockReducer,
    connection : connectionReducer
})

export default rootReducer;
