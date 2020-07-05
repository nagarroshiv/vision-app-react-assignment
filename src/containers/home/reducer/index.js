import { homeActionTypes } from "../constants";

const initialState = {
    loading: false,
    tags: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case homeActionTypes.tags.REQUEST:
            return {
                ...state,
                loading: true,
                tags: []
            }
        case homeActionTypes.tags.SUCCESS:
            return {
                ...state,
                loading: false,
                tags: payload
            }
        case homeActionTypes.tags.FAILURE:
            return {
                ...state,
                loading: false,
                tags: []
            }
        default:
            return state
    }
}