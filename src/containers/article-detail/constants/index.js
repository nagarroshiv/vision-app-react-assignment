import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

export const ARTICLE_DETAIL_API_URL = `${API_BASE_URL}/api/articles/`;

export const articleDetailActionTypes = {
	article_detail: createRequestActionTypes('ARTICLE_DETAIL')
};
