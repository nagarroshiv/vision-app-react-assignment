import { homeActionTypes } from '../constants';

const initialState = {
	loadingTag: false,
	tags: [],
	loadingArticles: false,
	articles: [],
	articlesCount: 0,
	favoriteInProcess: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case homeActionTypes.tags.REQUEST:
			return {
				...state,
				loadingTag: true,
				tags: []
			};
		case homeActionTypes.tags.SUCCESS:
			return {
				...state,
				loadingTag: false,
				tags: payload
			};
		case homeActionTypes.tags.FAILURE:
			return {
				...state,
				loadingTag: false,
				tags: []
			};
		case homeActionTypes.articles.REQUEST:
			return {
				...state,
				loadingArticles: true,
				articles: []
			};
		case homeActionTypes.articles.SUCCESS:
			return {
				...state,
				loadingArticles: false,
				articles: payload.articles,
				articlesCount: payload.articlesCount
			};
		case homeActionTypes.articles.FAILURE:
			return {
				...state,
				loadingArticles: false,
				articles: []
			};
		case homeActionTypes.favoriteArticle.REQUEST:
			return {
				...state,
				favoriteInProcess: true
			};
		case homeActionTypes.favoriteArticle.SUCCESS:
			return {
				...state,
				favoriteInProcess: false
			};
		case homeActionTypes.favoriteArticle.FAILURE:
			return {
				...state,
				favoriteInProcess: false
			};
		default:
			return state;
	}
};
