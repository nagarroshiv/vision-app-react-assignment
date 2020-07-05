import { combineReducers } from 'redux';
import signinReducer from '../containers/signin/reducer';
import homeReducer from '../containers/home/reducer';
import articleDetailReducer from '../containers/article-detail/reducer';

const rootReducer = combineReducers({
	signin: signinReducer,
	home: homeReducer,
	articleDetail: articleDetailReducer
});

export default rootReducer;
