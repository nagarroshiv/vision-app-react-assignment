import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

export const SIGNUP_API_URL = `${API_BASE_URL}/api/users`;

export const signupActionTypes = {
	signup: createRequestActionTypes('SIGNUP')
};
