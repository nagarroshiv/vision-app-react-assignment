import { createRequestActionTypes, API_BASE_URL } from "../../../utils/reduxUtils";

export const SIGNIN_API_URL = `${API_BASE_URL}/api/users/login`;

export const signinActionTypes = {
    signin: createRequestActionTypes('SIGNIN')
}