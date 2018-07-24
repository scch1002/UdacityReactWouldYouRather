import { _getQuestions, _saveQuestion  } from '../utils/_DATA';

export const RETRIEVE_QUESTIONS = 'QUESTIONS_RETRIEVE_QUESTIONS';
export const ADD_NEW_QUESTION = 'QUESTIONS_ADD_NEW_QUESTIONS';

const setQuestions = (questions) => ({
        type: RETRIEVE_QUESTIONS,
        questions: questions
});

const addNewQuestion = (newQuestion) => ({
    type: ADD_NEW_QUESTION,
    newQuestion
});

export const retrieveQuestions = () => (dispatch) => {
    _getQuestions()
    .then(questions => dispatch(setQuestions(Object.values(questions))));
};

export const saveQuestion = (question) => (dispatch) => {
    _saveQuestion(question)
        .then(newQuestion => dispatch(addNewQuestion(newQuestion)));
};
