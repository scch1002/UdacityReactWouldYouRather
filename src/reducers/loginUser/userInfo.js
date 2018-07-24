import { LOGIN_USER } from '../../actions/users';

export default function userInfo(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                id: action.loginUser.id,
                name: action.loginUser.name,
                avatarURL: action.loginUser.avatarURL
            }
        default:
            return state;
    }
}