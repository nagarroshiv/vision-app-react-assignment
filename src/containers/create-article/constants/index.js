import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

export const CREATE_ARTICLE_API_URL = `${API_BASE_URL}/api/articles`;

export const createArticleActionTypes = {
	createArticle: createRequestActionTypes('CREATE_ARTICLE')
};
