import { ANSWER_QUESTION } from '../../actions/users';
import { RETRIEVE_QUESTIONS, ADD_NEW_QUESTION } from '../../actions/questions';
import votes from './votes';

export default (optionLable = 'optionOne') => (state = {}, action) => {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return {
                text: action.question[optionLable].text,
                votes: votes(optionLable)(state.votes, action)
            };
        case ADD_NEW_QUESTION:
            return {
                text: action.newQuestion[optionLable].text,
                votes: votes(optionLable)(state.votes, action)
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                votes: votes(optionLable)(state.votes, action)
            }
        default:
            return state;
    }
};