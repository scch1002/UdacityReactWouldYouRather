import { ANSWER_QUESTION, LOGIN_USER, LOGOUT_USER } from '../../actions/users';

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
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}