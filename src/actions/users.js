import { _getUsers, _saveQuestionAnswer  } from '../utils/_DATA';

export const RETRIEVE_USER = 'USERS_RETRIEVE_USERS';
export const LOGIN_USER = 'USERS_LOGIN_USER';
export const ANSWER_QUESTION = 'USERS_ANSWER_QUESTION'

const setAvaliableUsers = (users) => ({
        type: RETRIEVE_USER,
        availableUsers: users
});

const setAnswerQuestion = (userId, answer) => ({
    type: ANSWER_QUESTION,
    answer,
    userId
});

export const retrieveUsers = () => (dispatch) => {
    _getUsers()
    .then(users => dispatch(setAvaliableUsers(Object.values(users))));
};

export const loginUser = (selectedUser) => ({
    type: LOGIN_USER,
    loginUser: selectedUser
});

export const AnswerQuestion = (qid, answer) => (dispatch, getState) => {
    let { userState: { loginUser }} = getState();
    _saveQuestionAnswer(loginUser.id, qid, answer)
        .then(t => dispatch(setAnswerQuestion(loginUser.id, answer)));
};
