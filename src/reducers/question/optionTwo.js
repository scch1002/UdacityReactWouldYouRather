import { ANSWER_QUESTION } from '../actions/users';

export default function optionTwo(state = {}, action) {
    switch(action.type) {
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