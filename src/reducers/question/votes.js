import { RETRIEVE_QUESTIONS, ADD_NEW_QUESTION } from '../../actions/questions'
import { ANSWER_QUESTION }  from '../../actions/users'

export default (optionLable = 'optionOne') => (state = [], action) => {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return [
                ...action.question[optionLable].votes
            ];
        case ADD_NEW_QUESTION:
            return [
                ...action.newQuestion[optionLable].votes
            ];
        case ANSWER_QUESTION:
            return [
                ...state,
                action.userId
            ];
        default:
            return state;
    }
}