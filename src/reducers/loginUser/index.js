import { combineReducers } from 'redux';
import answers from './answers';
import userInfo from './userInfo';

export default combineReducers({
    userInfo,
    answers
});