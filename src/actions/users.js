import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _saveQuestionAnswer  } from '../utils/_DATA';

export const RETRIEVE_USER = 'USERS_RETRIEVE_USERS';
export const LOGIN_USER = 'USERS_LOGIN_USER';
export const LOGOUT_USER = 'USERS_LOGOUT_USER';
export const ANSWER_QUESTION = 'USERS_ANSWER_QUESTION'

export const setAvaliableUsers = (users) => ({
        type: RETRIEVE_USER,
        availableUsers: users
});

const setAnswerQuestion = (questionId, answer, userId) => ({
    type: ANSWER_QUESTION,
    questionId,
    answer,
    userId
});

export const loginUser = (selectedUserId) => ({
    type: LOGIN_USER,
    loginUser: selectedUserId
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const answerQuestion = (qid, answer) => (dispatch, getState) => {
    let { loginUser, users } = getState();
    let userInfo = users[loginUser];
    dispatch(showLoading());
    dispatch(setAnswerQuestion(qid, answer, userInfo.id));
    return _saveQuestionAnswer({ authedUser: userInfo.id, qid, answer})
        .then(t => dispatch(hideLoading()));
};
