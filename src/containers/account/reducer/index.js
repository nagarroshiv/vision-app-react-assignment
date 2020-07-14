import { userProfileActionTypes } from '../constants';

const initialState = {
	loadingProfile: false,
	user: {},
	loadingUserArticles: false,
	userArticles: [],
	userArticlesCount: 0,
	loadingFavortieArticles: false,
	favroriteArticles: [],
	favroriteArticlesCount: 0,
	updatingProfile: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case userProfileActionTypes.user_profile.REQUEST:
			return {
				...state,
				loadingProfile: true
				// user: {}
			};
		case userProfileActionTypes.user_profile.SUCCESS:
			return {
				...state,
				loadingProfile: false,
				user: payload
			};
		case userProfileActionTypes.user_profile.FAILURE:
			return {
				...state,
				loadingProfile: false,
				user: {}
			};
		// case userProfileActionTypes.user_articles.REQUEST:
		// 	return {
		// 		...state,
		// 		loadingUserArticles: true,
		// 		userArticles: []
		// 	};
		case userProfileActionTypes.user_articles.SUCCESS:
			return {
				...state,
				loadingUserArticles: false,
				userArticles: payload.articles,
				userArticlesCount: payload.articlesCount
			};
		case userProfileActionTypes.user_articles.FAILURE:
			return {
				...state,
				loadingUserArticles: false,
				userArticles: []
			};
		// case userProfileActionTypes.favorite_articles.REQUEST:
		// 	return {
		// 		...state,
		// 		loadingFavortieArticles: true,
		// 		favroriteArticles: []
		// 	};
		case userProfileActionTypes.favorite_articles.SUCCESS:
			return {
				...state,
				loadingFavortieArticles: false,
				favroriteArticles: payload.articles,
				favroriteArticlesCount: payload.articlesCount
			};
		case userProfileActionTypes.favorite_articles.FAILURE:
			return {
				...state,
				loadingFavortieArticles: false,
				favroriteArticles: []
			};
		case userProfileActionTypes.update_profile.REQUEST:
			return {
				...state,
				updatingProfile: true
			};
		case userProfileActionTypes.update_profile.SUCCESS:
			return {
				...state,
				updatingProfile: false
			};
		case userProfileActionTypes.update_profile.FAILURE:
			return {
				...state,
				updatingProfile: false
			};
		default:
			return state;
	}
};
