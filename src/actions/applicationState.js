export const APP_LOADING_START = 'APPLICATION_STATE_APP_LOADING_START';
export const APP_LOADING_END = 'APPLICATION_STATE_APP_LOADING_END';

export const setAppLoadingStart = () => ({
        type: APP_LOADING_START
});

export const setAppLoadingEnd = () => ({
    type: APP_LOADING_END,
});