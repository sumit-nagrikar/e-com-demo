import { combineReducers } from 'redux';
import reducer from './amountReducers';

const reducers = combineReducers({
    amount: reducer
})


export default reducers;