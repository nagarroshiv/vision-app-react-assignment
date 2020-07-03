import { combineReducers } from 'redux';
import signinReducer from '../containers/signin/reducer';

const rootReducer = combineReducers({
	signin: signinReducer
});

export default rootReducer;
