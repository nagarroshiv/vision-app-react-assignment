import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from "../../../utils/reduxUtils"
import { homeActionTypes, TAGS_API_URL } from "../constants"
import axios from "axios"

export const getTagsAction = () => {
    return (dispatch) => {
        dispatch(actionCreator(homeActionTypes.tags.REQUEST))
        axios.get(TAGS_API_URL, {
            headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
        })
        .then(response => {
            dispatch(actionCreator(homeActionTypes.tags.SUCCESS, response.data.tags))
        })
        .catch(error => {
            dispatch(actionCreator(homeActionTypes.tags.FAILURE))
        })
    }
}