import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils/reduxUtils';
import { CREATE_ARTICLE_API_URL, createArticleActionTypes } from '../constants';
import axios from 'axios';

export const createArticleAction = (form_data) => {
	return (dispatch) => {
		dispatch(actionCreator(createArticleActionTypes.createArticle.REQUEST));
		axios
			.post(CREATE_ARTICLE_API_URL, form_data, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(createArticleActionTypes.createArticle.SUCCESS, response.data.article));
			})
			.catch((error) => {
				dispatch(actionCreator(createArticleActionTypes.createArticle.FAILURE));
			});
	};
};

export const updateArticleAction = (form_data, id) => {
	return (dispatch) => {
		dispatch(actionCreator(createArticleActionTypes.createArticle.REQUEST));
		axios
			.put(`${CREATE_ARTICLE_API_URL}/${id}`, form_data, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(createArticleActionTypes.createArticle.SUCCESS, response.data.article));
			})
			.catch((error) => {
				dispatch(actionCreator(createArticleActionTypes.createArticle.FAILURE));
			});
	};
};
