import { articleDetailActionTypes } from '../constants';

const initialState = {
	loadingArticle: false,
	article: {},
	loadingComments: false,
	comments: [],
	deletingComment: false
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
		case articleDetailActionTypes.article_comments.SUCCESS:
			return {
				...state,
				loadingComments: false,
				comments: payload
			};
		case articleDetailActionTypes.article_comments.FAILURE:
			return {
				...state,
				loadingComments: false,
				comments: []
			};
		case articleDetailActionTypes.delete_comments.REQUEST:
			return {
				...state,
				deletingComment: true
			};
		case articleDetailActionTypes.delete_comments.SUCCESS:
			return {
				...state,
				deletingComment: false
			};
		case articleDetailActionTypes.delete_comments.FAILURE:
			return {
				...state,
				deletingComment: false
			};
		default:
			return state;
	}
};
