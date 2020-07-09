import axios from 'axios';
import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils/reduxUtils';
import {
	userProfileActionTypes,
	GET_USER_PROFILE_API_URL,
	GET_USER_ARTICLES_API_URL,
	GET_FAVORITE_ARTICLES_API_URL,
	UPDATE_USER_PROFILE_API_URL
} from '../constants';

export const getUserProfileAction = (id) => {
	return (dispatch) => {
		dispatch(actionCreator(userProfileActionTypes.user_profile.REQUEST));
		axios
			.get(`${GET_USER_PROFILE_API_URL}${id}`, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(userProfileActionTypes.user_profile.SUCCESS, response.data.profile));
			})
			.catch((error) => {
				dispatch(actionCreator(userProfileActionTypes.user_profile.FAILURE));
			});
	};
};

export const getUserArticlesAction = (username, limit = 5, offset = 0) => {
	return (dispatch) => {
		// dispatch(actionCreator(userProfileActionTypes.user_articles.REQUEST));
		axios
			.get(`${GET_USER_ARTICLES_API_URL}${username}&limit=${limit}&offset=${offset}`, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(userProfileActionTypes.user_articles.SUCCESS, response.data.articles));
			})
			.catch((error) => {
				dispatch(actionCreator(userProfileActionTypes.user_articles.FAILURE));
			});
	};
};

export const getUserFavoriteArticlesAction = (username, limit = 5, offset = 0) => {
	return (dispatch) => {
		// dispatch(actionCreator(userProfileActionTypes.favorite_articles.REQUEST));
		axios
			.get(`${GET_FAVORITE_ARTICLES_API_URL}${username}&limit=${limit}&offset=${offset}`, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(userProfileActionTypes.favorite_articles.SUCCESS, response.data.articles));
			})
			.catch((error) => {
				dispatch(actionCreator(userProfileActionTypes.favorite_articles.FAILURE));
			});
	};
};

export const updateUserProfileAction = (formData) => {
	return (dispatch) => {
		dispatch(actionCreator(userProfileActionTypes.update_profile.REQUEST));
		axios
			.put(UPDATE_USER_PROFILE_API_URL, formData, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(userProfileActionTypes.update_profile.SUCCESS));
			})
			.catch((error) => {
				dispatch(actionCreator(userProfileActionTypes.update_profile.FAILURE));
			});
	};
};
