import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils/reduxUtils';
import { articleDetailActionTypes, ARTICLE_DETAIL_API_URL } from '../constants';
import axios from 'axios';

export const getArticleDetailAction = (id) => {
	return (dispatch) => {
		dispatch(actionCreator(articleDetailActionTypes.article_detail.REQUEST));
		axios
			.get(`${ARTICLE_DETAIL_API_URL}${id}`, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(articleDetailActionTypes.article_detail.SUCCESS, response.data.article));
			})
			.catch((error) => {
				dispatch(actionCreator(articleDetailActionTypes.article_detail.FAILURE));
			});
	};
};
