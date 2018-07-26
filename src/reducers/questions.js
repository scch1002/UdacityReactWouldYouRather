import { RETRIEVE_QUESTIONS, ADD_NEW_QUESTION } from '../actions/questions';
import { ANSWER_QUESTION } from '../actions/users';
import question from './question';

export default (state = [], action) => {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return action.questions.map(m => question({}, {type: RETRIEVE_QUESTIONS, question: m}))
        case ADD_NEW_QUESTION:
            return [
                ...state,
                question({}, action)
            ];
        case ANSWER_QUESTION:
            return state.map(m => m.id === action.questionId ? question(m, action) : m);
        default:
            return state;
    }
}
