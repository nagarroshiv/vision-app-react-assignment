import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY, WHITESMOKE } from '../../utils/colorConstants';
import { signupAction } from './action';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
	const [ userName, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const dispatch = useDispatch();
	const loading = useSelector((state) => state.signup.loading);
	const signupErrorMessage = useSelector((state) => state.signup.signupError);
	const signupMessage = useSelector((state) => state.signup.signupMessage);

	useEffect(
		() => {
			if (!loading) {
				console.log('asjasjhsa');
			}
		},
		[ loading ]
	);

	const resetForm = (type) => {
		if (type === 'all') {
			setUserName('');
			setEmail('');
			setPassword('');
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const requestBody = {
			user: {
				username: userName,
				email: email,
				password: password
			}
		};

		dispatch(signupAction(requestBody));
	};

	return (
		<div style={{ marginTop: '10%' }} className="text-center">
			<div style={{ maxWidth: '450px', margin: 'auto', padding: '0 10px' }}>
				<h3>Vision | Sign up</h3>
				<br />
				<form method="post" onSubmit={onSubmit}>
					<div className="form-group">
						<input
							disabled={loading}
							placeholder="Username"
							className="form-control"
							value={userName}
							onChange={(event) => setUserName(event.target.value)}
							required={true}
						/>
					</div>

					<div className="form-group">
						<input
							disabled={loading}
							type="email"
							placeholder="Email"
							className="form-control"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required={true}
						/>
					</div>
					<div className="form-group">
						<input
							min={8}
							disabled={loading}
							type="password"
							placeholder="Password"
							className="form-control"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							required={true}
						/>
					</div>
					<p>
						Already have an account? <Link to="/signin">Signin</Link> | <Link to="/">Home</Link>
					</p>
					<div className="text-center">
						<input
							disabled={loading}
							type="submit"
							className="btn"
							value="Sign up"
							style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}
						/>
					</div>
					<div className="text-danger" style={{textDecoration: 'capitalize'}}>{signupErrorMessage}</div>
					<div className="text-success" >{signupMessage}</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
