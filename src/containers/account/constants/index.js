import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

export const GET_USER_PROFILE_API_URL = `${API_BASE_URL}/api/profiles/`;
export const GET_USER_ARTICLES_API_URL = `${API_BASE_URL}/api/articles?author=`;
export const GET_FAVORITE_ARTICLES_API_URL = `${API_BASE_URL}/api/articles?favorited=`;

export const userProfileActionTypes = {
	user_profile: createRequestActionTypes('USER_PROFILE'),
	user_articles: createRequestActionTypes('USER_ARTICLES'),
	favorite_articles: createRequestActionTypes('FAVORITE_ARTICLES')
};
