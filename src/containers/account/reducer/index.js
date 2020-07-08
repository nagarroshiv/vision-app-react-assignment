import { userProfileActionTypes } from '../constants';

const initialState = {
	loadingProfile: false,
	user: {},
	loadingUserArticles: false,
	userArticles: [],
	loadingFavortieArticles: false,
	favroriteArticles: []
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case userProfileActionTypes.user_profile.REQUEST:
			return {
				...state,
				loadingProfile: true,
				user: {}
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
				userArticles: payload
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
				favroriteArticles: payload
			};
		case userProfileActionTypes.favorite_articles.FAILURE:
			return {
				...state,
				loadingFavortieArticles: false,
				favroriteArticles: []
			};
		default:
			return state;
	}
};
