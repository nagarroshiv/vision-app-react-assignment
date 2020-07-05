import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils/reduxUtils';
import { homeActionTypes, TAGS_API_URL, ARTICLES_API_URL } from '../constants';
import axios from 'axios';

export const getTagsAction = () => {
	return (dispatch) => {
		dispatch(actionCreator(homeActionTypes.tags.REQUEST));
		axios
			.get(TAGS_API_URL, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(homeActionTypes.tags.SUCCESS, response.data.tags));
			})
			.catch((error) => {
				dispatch(actionCreator(homeActionTypes.tags.FAILURE));
			});
	};
};

export const getArticles = (limit, offset) => {
	return (dispatch) => {
		dispatch(actionCreator(homeActionTypes.articles.REQUEST));
		axios
			.get(`${ARTICLES_API_URL}?limit=${limit ? limit : 10}&offset=${offset ? offset : 0}`, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(homeActionTypes.articles.SUCCESS, response.data.articles));
			})
			.catch((error) => {
				dispatch(actionCreator(homeActionTypes.articles.FAILURE));
			});
	};
};
