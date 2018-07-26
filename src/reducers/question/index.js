import { RETRIEVE_QUESTIONS } from '../../actions/questions';
import optionOne from './optionOne';
import optionTwo from './optionTwo';

export default function question(state = {}, action) {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return {
                id: action.id,
                name: action.name,
                avatarUrl: action.avatarUrl,
                optionOne: optionOne(state.optionOne, action.optionOne),
                optionTwo: optionTwo(state.optionTwo, action.optionTwo)
            }
        default:
            return state;
    }
};
