import { signupActionTypes } from '../constants';

const initialState = {
	loading: false,
	signupError: '',
	signupMessage: ''
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case signupActionTypes.signup.REQUEST:
			return {
				...state,
				loading: true,
				signupError: '',
				signupMessage: ''
			};
		case signupActionTypes.signup.SUCCESS:
			return {
				...state,
				loading: false,
				signupMessage: 'Successfully signup, please goto signin page'
			};
		case signupActionTypes.signup.FAILURE:
			const message = payload.charAt(0).toUpperCase() + payload.slice(1);
			return {
				...state,
				loading: false,
				signupMessage: '',
				signupError: message
			};
		default:
			return state;
	}
};
