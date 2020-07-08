import { combineReducers } from 'redux';
import signinReducer from '../containers/signin/reducer';
import homeReducer from '../containers/home/reducer';
import articleDetailReducer from '../containers/article-detail/reducer';
import createArticle from '../containers/create-article/reducer';
import userProfileReducer from '../containers/account/reducer';

const rootReducer = combineReducers({
	signin: signinReducer,
	home: homeReducer,
	articleDetail: articleDetailReducer,
	createArticle: createArticle,
	userProfile: userProfileReducer
});

export default rootReducer;
