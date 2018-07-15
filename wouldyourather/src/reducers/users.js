import { RETRIEVE_USER, LOGIN_USER } from '../actions/users';

export default function userState(state = {}, action) {
    switch(action.type) {
        case RETRIEVE_USER:
            return {
                loginUser: state.loginUser,
                availableUsers: action.availableUsers
            }
        case LOGIN_USER:
            return {
                loginUser: action.loginUser,
                availableUsers: state.availableUsers
            }
        default:
            return state;
    }
}
