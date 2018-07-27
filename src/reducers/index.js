import { combineReducers } from 'redux';
import loginUser from './loginUser';
import questions from './questions';
import users from './users';
import appLoading from './appLoading';

export default combineReducers({
    appLoading,
    loginUser,
    questions,
    users
});