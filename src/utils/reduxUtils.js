const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const API_BASE_URL = 'https://conduit.productionready.io'

export const jsonApiHeader = (accessToken, ContentType) => {
    return {
        'Content-Type': ContentType,
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
    };
};

export const getAccessTokenFromLocalStorage = () => {
    return localStorage.getItem('token')
}

export function createRequestActionTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((requestTypes, type) => {
        requestTypes[type] = `${base}_${type}`;
        return requestTypes;
    }, {});
}

export function actionCreator(actionType, data) {
    return {
        type: actionType,
        payload: data,
    };
}