import { actionCreator } from '../../../utils/reduxUtils';
import { signupActionTypes, SIGNUP_API_URL } from '../constants';
import axios from 'axios';
import Signup from '../Signup';

export const signupAction = (requestBody) => {
	return (dispatch) => {
		dispatch(actionCreator(signupActionTypes.signup.REQUEST));
		axios
			.post(SIGNUP_API_URL, requestBody)
			.then((response) => {
				dispatch(actionCreator(signupActionTypes.signup.SUCCESS));
			})
			.catch((error) => {
				
                console.log('error', error.response.data.errors);
                const errors = error.response.data.errors
                let signupError = ''
                Object.entries(errors).forEach(item => {
                    console.log(item)
                    signupError += `${item[0]} ${item[1][0]}, `
                })

                console.log('signupError', signupError)

                dispatch(actionCreator(signupActionTypes.signup.FAILURE, signupError));
			});
	};
};
