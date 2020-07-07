import { actionCreator, jsonApiHeader, getAccessTokenFromLocalStorage } from '../../../utils/reduxUtils';
import {
	articleDetailActionTypes,
	ARTICLE_DETAIL_API_URL,
	ARTICLE_COMMENTS_API_URL_START,
	ARTICLE_COMMENTS_API_URL_END,
	DELETE_ARTICLE_COMMENT_API_URL_START,
	DELETE_ARTICLE_COMMENT_API_URL_END
} from '../constants';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

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

export const getArticleCommentsAction = (id) => {
	return (dispatch) => {
		axios
			.get(`${ARTICLE_COMMENTS_API_URL_START}${id}${ARTICLE_COMMENTS_API_URL_END}`, {
				headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
			})
			.then((response) => {
				dispatch(actionCreator(articleDetailActionTypes.article_comments.SUCCESS, response.data.comments));
			})
			.catch((error) => {
				dispatch(actionCreator(articleDetailActionTypes.article_comments.FAILURE));
			});
	};
};

export const deleteCommentAction = (articleId, commentId) => {
	return (dispatch) => {
		dispatch(actionCreator(articleDetailActionTypes.delete_comments.REQUEST));
		axios
			.delete(
				`${DELETE_ARTICLE_COMMENT_API_URL_START}${articleId}${DELETE_ARTICLE_COMMENT_API_URL_END}${commentId}`,
				{
					headers: jsonApiHeader(getAccessTokenFromLocalStorage(), 'application/json')
				}
			)
			.then((response) => {
				dispatch(actionCreator(articleDetailActionTypes.delete_comments.SUCCESS));
			})
			.catch((error) => {
				dispatch(actionCreator(articleDetailActionTypes.delete_comments.FAILURE));
			});
	};
};
