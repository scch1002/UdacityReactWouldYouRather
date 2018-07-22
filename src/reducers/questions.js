import { RETRIEVE_QUESTIONS } from '../actions/questions';

export default function questionState(state = {}, action) {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return {
                questions: action.questions
            }
        default:
            return state;
    }
}
