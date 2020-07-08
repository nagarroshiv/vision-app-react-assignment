import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

// ARTICLE
export const ARTICLE_DETAIL_API_URL = `${API_BASE_URL}/api/articles/`;
export const DELETE_ARTICLE_API_URL = `${API_BASE_URL}/api/articles/`;

// COMMENTS
export const ARTICLE_COMMENTS_API_URL_START = `${API_BASE_URL}/api/articles/`;
export const ARTICLE_COMMENTS_API_URL_END = `/comments`;
export const DELETE_ARTICLE_COMMENT_API_URL_START = `${API_BASE_URL}/api/articles/`;
export const DELETE_ARTICLE_COMMENT_API_URL_END = `/comments/`;
export const CREATE_ARTICLE_COMMENT_API_URL_START = `${API_BASE_URL}/api/articles/`;
export const CREATE_ARTICLE_COMMENT_API_URL_END = `/comments`;

export const articleDetailActionTypes = {
	article_detail: createRequestActionTypes('ARTICLE_DETAIL'),
	delete_article: createRequestActionTypes('DELETE_ARTICLE'),
	article_comments: createRequestActionTypes('ARTICLE_COMMENTS'),
	delete_comments: createRequestActionTypes('DELETE_COMMENT'),
	create_comment: createRequestActionTypes('CREATE_COMMENT')
};
