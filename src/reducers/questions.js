import { RETRIEVE_QUESTIONS, ADD_NEW_QUESTION } from '../actions/questions';

export default function questions(state = [], action) {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return [
                ...state,
                ...action.questions
            ];
        case ADD_NEW_QUESTION:
            return [
                ...state,
                action.newQuestion
            ];
        default:
            return state;
    }
}
