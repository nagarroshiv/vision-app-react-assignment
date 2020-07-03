import { signinActionTypes } from "../constants";

const initialState = {
    loading: false,
    loggedIn: false,
    user: {},
    signinErrorMessage: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case signinActionTypes.signin.REQUEST:
            return {
                ...state,
                loading: true,
                loggedIn: false,
                user: {},
                signinErrorMessage: ''
            }
        case signinActionTypes.signin.SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: payload,
                signinErrorMessage: ''
            }
        case signinActionTypes.signin.FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: {},
                signinErrorMessage: 'Invalid username or password'
            }
        default:
            return state
    }
}