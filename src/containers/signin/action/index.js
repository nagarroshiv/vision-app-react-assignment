import { signinActionTypes, SIGNIN_API_URL } from '../constants';
import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils/reduxUtils';
import axios from 'axios';

export const signInAction = (data) => {
	return (dispatch) => {
		dispatch(actionCreator(signinActionTypes.signin.REQUEST));
		axios
			.post(SIGNIN_API_URL, data, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
                console.log(response.data.user)
				dispatch(actionCreator(signinActionTypes.signin.SUCCESS, response.data.user));
			})
			.catch((error) => {
				dispatch(actionCreator(signinActionTypes.signin.FAILURE));

			});
	};
};
