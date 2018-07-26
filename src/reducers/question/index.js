import { RETRIEVE_QUESTIONS } from '../../actions/questions';
import { ANSWER_QUESTION } from '../../actions/users';
import option from './option';

export default function question(state = {}, action) {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return {
                id: action.question.id,
                author: action.question.author,
                timestamp: action.question.timestamp,
                optionOne: option('optionOne')(state.optionOne, action),
                optionTwo: option('optionTwo')(state.optionTwo, action)
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                optionOne: option('optionOne')(state.optionOne, action),
                optionTwo: option('optionTwo')(state.optionTwo, action)
            }
        default:
            return state;
    }
};
