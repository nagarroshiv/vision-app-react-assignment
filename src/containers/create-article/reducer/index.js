import { createArticleActionTypes } from '../constants';

const initialState = {
	loadingCreateArticle: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case createArticleActionTypes.createArticle.REQUEST:
			return {
				...state,
				loadingCreateArticle: true
			};
		case createArticleActionTypes.createArticle.SUCCESS:
			return {
				...state,
				loadingCreateArticle: false
			};
		case createArticleActionTypes.createArticle.FAILURE:
			return {
				...state,
				loadingCreateArticle: false
			};
		default:
			return state;
	}
};
