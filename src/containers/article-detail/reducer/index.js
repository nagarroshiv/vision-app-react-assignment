import { articleDetailActionTypes } from '../constants';

const initialState = {
	deletingArticle: false,
	loadingArticle: false,
	article: {},
	loadingComments: false,
	comments: [],
	deletingComment: false,
	creatingComment: false
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
		case articleDetailActionTypes.create_comment.REQUEST:
			return {
				...state,
				creatingComment: true
			};
		case articleDetailActionTypes.create_comment.SUCCESS:
			return {
				...state,
				creatingComment: false
			};
		case articleDetailActionTypes.create_comment.FAILURE:
			return {
				...state,
				creatingComment: false
			};
		case articleDetailActionTypes.delete_article.REQUEST:
			return {
				...state,
				deletingArticle: true
			};
		case articleDetailActionTypes.delete_article.SUCCESS:
			return {
				...state,
				deletingArticle: false
			};
		case articleDetailActionTypes.delete_article.FAILURE:
			return {
				...state,
				deletingArticle: false
			};
		default:
			return state;
	}
};
