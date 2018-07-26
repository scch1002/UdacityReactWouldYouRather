import { ANSWER_QUESTION } from '../actions/users';
import { RETRIEVE_QUESTIONS } from '../../actions/questions';

export default function optionOne(state = {}, action) {
    switch(action.type) {
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.questionId]: action.answer
            }
        case RETRIEVE_QUESTIONS:
            return {
                
            };
        default:
            return state;
    }
}