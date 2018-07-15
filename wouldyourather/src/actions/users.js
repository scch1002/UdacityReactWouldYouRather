import { _getUsers  } from '../utils/_DATA';

export const RETRIEVE_USER = 'USERS_RETRIEVE_USERS';

const setAvaliableUsers = (users) => ({
        type: RETRIEVE_USER,
        availableUsers: users
});

export const retrieveUsers = () => (dispatch) => {
    _getUsers()
    .then(users => dispatch(setAvaliableUsers(users)));
};