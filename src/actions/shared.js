 import { _getQuestions, _getUsers } from '../utils/_DATA';
 import { setQuestions } from './questions';
 import { setAvaliableUsers } from './users';
 import { setAppLoadingStart, setAppLoadingEnd } from './applicationState';

 function getInitialData() {
     return Promise.all(
         [
            _getQuestions(),
            _getUsers()
         ])
         .then(([questions, users]) =>
        ({
            questions,
            users
        }));
 }

export function handleInitialData () {
    return (dispatch) => {
      dispatch(setAppLoadingStart())
      return getInitialData()
        .then(({ questions, users }) => {
          dispatch(setAvaliableUsers(users));
          dispatch(setQuestions(questions));
          dispatch(setAppLoadingEnd());
        });
    }
  }