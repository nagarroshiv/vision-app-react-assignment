import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

export const TAGS_API_URL = `${API_BASE_URL}/api/tags`;
export const ARTICLES_API_URL = `${API_BASE_URL}/api/articles`;
export const FAVORITE_ARTICLE_API_URL_START = `${API_BASE_URL}/api/articles/`;
export const FAVORITE_ARTICLE_API_URL_END = `/favorite`;

export const homeActionTypes = {
	tags: createRequestActionTypes('TAGS'),
	articles: createRequestActionTypes('ARTICLES'),
	favoriteArticle: createRequestActionTypes('FAVORTIE_ARTICLE')
};
