import { signinActionTypes, SIGNIN_API_URL, USER_DETAIL_API_URL } from '../constants';
import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils/reduxUtils';
import axios from 'axios';

export const signInAction = (data) => {
	return (dispatch) => {
		dispatch(actionCreator(signinActionTypes.signin.REQUEST));
		axios
			.post(SIGNIN_API_URL, data)
			.then((response) => {
				localStorage.setItem('jwtToken', response.data.user.token)
				dispatch(actionCreator(signinActionTypes.signin.SUCCESS, response.data.user));
			})
			.catch((error) => {
				dispatch(actionCreator(signinActionTypes.signin.FAILURE));

			});
	};
};

export const getUserDetailAction = () => {
	return (dispatch) => {
		dispatch(actionCreator(signinActionTypes.userDetail.REQUEST));
		axios
			.get(USER_DETAIL_API_URL, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(signinActionTypes.userDetail.SUCCESS, response.data.user));
			})
			.catch((error) => {
				dispatch(actionCreator(signinActionTypes.userDetail.FAILURE));
			});
	};
};


