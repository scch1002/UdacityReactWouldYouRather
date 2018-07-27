import { RETRIEVE_USER, ANSWER_QUESTION } from '../actions/users';
import { ADD_NEW_QUESTION } from '../actions/questions';

export default function users(state = [], action) {
    switch(action.type) {
        case RETRIEVE_USER:
            return {
                ...action.availableUsers
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    answers: {
                        ...state[action.userId].answers,
                        [action.questionId]: action.answer
                    }
                }
            };
        case ADD_NEW_QUESTION:
            return {
                ...state,
                [action.newQuestion.author]: {
                    ...state[action.newQuestion.author],
                    questions: [
                        ...state[action.newQuestion.author].questions,
                        action.newQuestion.id
                    ]
                }
            };
        default:
            return state;
    }
}
