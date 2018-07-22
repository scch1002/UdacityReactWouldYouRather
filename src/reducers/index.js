import { combineReducers } from 'redux';
import userState from './users';
import questionState from './questions';

export default combineReducers({
    userState,
    questionState
});