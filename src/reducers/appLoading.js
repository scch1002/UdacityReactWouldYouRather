import { APP_LOADING_START, APP_LOADING_END } from '../actions/applicationState';

export default (state = true, action) => {
    switch(action.type) {
        case APP_LOADING_START:
            return true;
        case APP_LOADING_END:
            return false;
        default:
            return state;
    }
}
