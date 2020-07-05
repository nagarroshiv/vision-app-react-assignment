import { createRequestActionTypes, API_BASE_URL } from "../../../utils/reduxUtils";

export const TAGS_API_URL = `${API_BASE_URL}/api/tags`;

export const homeActionTypes = {
    tags: createRequestActionTypes('TAGS')
}