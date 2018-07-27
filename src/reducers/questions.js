import { RETRIEVE_QUESTIONS, ADD_NEW_QUESTION } from '../actions/questions';
import { ANSWER_QUESTION } from '../actions/users';

export default (state = [], action) => {
    switch(action.type) {
        case RETRIEVE_QUESTIONS:
            return {
                ...action.questions
            };
        case ADD_NEW_QUESTION:
            return {
                ...state,
                [action.newQuestion.id]: action.newQuestion
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: { 
                        ...state[action.questionId][action.answer],
                        votes: [
                            ...state[action.questionId][action.answer].votes,
                            action.userId 
                        ]
                    }
                }
            };
        default:
            return state;
    }
}
