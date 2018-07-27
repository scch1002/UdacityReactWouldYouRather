import { LOGIN_USER, LOGOUT_USER } from '../actions/users';

export default (state = null, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return action.loginUser;
        case LOGOUT_USER:
            return null;
        default:
            return state;
    }
}
