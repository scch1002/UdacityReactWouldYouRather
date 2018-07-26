import { RETRIEVE_QUESTIONS, ADD_NEW_QUESTION } from '../actions/questions';
import question from './question';

export default (state = [], action) => {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return action.questions.map(m => question({}, {type: RETRIEVE_QUESTIONS, m}))
        case ADD_NEW_QUESTION:
            return [
                ...state,
                question({}, action.newQuestion)
            ];
        default:
            return state;
    }
}
