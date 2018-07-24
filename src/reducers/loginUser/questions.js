import { ANSWER_QUESTION, LOGIN_USER } from '../actions/users';

export default function answers(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.loginUser.answers
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.questionId]: action.answer
            }
        default:
            return state;
    }
}