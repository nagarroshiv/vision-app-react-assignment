import { articleDetailActionTypes } from '../constants';

const initialState = {
	loadingArticle: false,
	article: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case articleDetailActionTypes.article_detail.REQUEST:
			return {
				...state,
				loadingArticle: true,
				article: {}
			};
		case articleDetailActionTypes.article_detail.SUCCESS:
			return {
				...state,
				loadingArticle: false,
				article: payload
			};
		case articleDetailActionTypes.article_detail.FAILURE:
			return {
				...state,
				loadingArticle: false,
				article: []
			};
		default:
			return state;
	}
};
