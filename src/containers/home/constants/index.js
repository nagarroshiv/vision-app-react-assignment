import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

export const TAGS_API_URL = `${API_BASE_URL}/api/tags`;
export const ARTICLES_API_URL = `${API_BASE_URL}/api/articles`;

export const homeActionTypes = {
	tags: createRequestActionTypes('TAGS'),
	articles: createRequestActionTypes('ARTICLES')
};
