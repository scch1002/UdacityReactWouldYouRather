import { _getUsers  } from '../utils/_DATA';

export const RETRIEVE_USER = 'USERS_RETRIEVE_USERS';
export const LOGIN_USER = 'USERS_LOGIN_USER';

const setAvaliableUsers = (users) => ({
        type: RETRIEVE_USER,
        availableUsers: users
});

export const retrieveUsers = () => (dispatch) => {
    _getUsers()
    .then(users => dispatch(setAvaliableUsers(Object.values(users))));
};

export const loginUser = (selectedUser) => ({
    type: LOGIN_USER,
    loginUser: selectedUser
});