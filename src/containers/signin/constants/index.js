import { createRequestActionTypes, API_BASE_URL } from '../../../utils/reduxUtils';

export const SIGNIN_API_URL = `${API_BASE_URL}/api/users/login`;
export const USER_DETAIL_API_URL = `${API_BASE_URL}/api/user`;

export const signinActionTypes = {
	signin: createRequestActionTypes('SIGNIN'),
	userDetail: createRequestActionTypes('USER_DETAIL')
};
