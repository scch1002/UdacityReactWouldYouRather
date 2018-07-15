import { RETRIEVE_USER } from '../actions/users';

export default function users(state = {}, action) {
    switch(action.type) {
        case RETRIEVE_USER:
            return {
                ...state,
                ...action.availableUsers
            }
        default:
            return state;
    }
}
