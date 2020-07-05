import { combineReducers } from 'redux';
import signinReducer from '../containers/signin/reducer';
import homeReducer from '../containers/home/reducer';

const rootReducer = combineReducers({
	signin: signinReducer,
	home: homeReducer
});

export default rootReducer;
