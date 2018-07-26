import { RETRIEVE_USER, ANSWER_QUESTION } from '../actions/users';
import { ADD_NEW_QUESTION } from '../actions/questions';

export default function users(state = [], action) {
    switch(action.type) {
        case RETRIEVE_USER:
            return [
                ...action.availableUsers
            ]
        case ANSWER_QUESTION:
            return state.map(m => m.id === action.userId ? 
                {
                    ...m,
                    answers: {
                        ...m.answers,
                        [action.questionId]: action.anwser
                    }
                }
                :
                m
            );
        case ADD_NEW_QUESTION:
            return state.map(m => m.id === action.newQuestion.author ? 
                {
                    ...m,
                    questions: [
                        ...m.questions,
                        action.newQuestion.id
                    ]
                }
                :
                m
            );
        default:
            return state;
    }
}
