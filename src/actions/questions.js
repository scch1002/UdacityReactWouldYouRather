import { _getQuestions  } from '../utils/_DATA';

export const RETRIEVE_QUESTIONS = 'QUESTIONS_RETRIEVE_QUESTIONS';

const setQuestions = (questions) => ({
        type: RETRIEVE_QUESTIONS,
        questions: questions
});

export const retrieveQuestions = () => (dispatch) => {
    _getQuestions()
    .then(questions => dispatch(setQuestions(Object.values(questions))));
};
