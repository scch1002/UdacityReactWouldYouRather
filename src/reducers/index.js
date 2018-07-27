import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import loginUser from './loginUser';
import questions from './questions';
import users from './users';
import appLoading from './appLoading';


export default combineReducers({
    appLoading,
    loadingBar: loadingBarReducer,
    loginUser,
    questions,
    users
});