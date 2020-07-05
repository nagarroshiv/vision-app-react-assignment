import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY, WHITESMOKE } from '../../utils/colorConstants';

const Signup = () => {
	const [ userName, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ userNameError, setUserNameError ] = useState(false);
	const [ emailError, setEmailError ] = useState(false);
	const [ passwordError, setPasswordError ] = useState(false);

	const resetForm = (type) => {
		if (type === 'all') {
			setUserName('');
			setEmail('');
			setPassword('');
		}
		setUserNameError(false);
		setEmailError(false);
		setPasswordError(false);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		// Reset Validation
		resetForm();

		// Validation
		if (!userName) {
			setUserNameError(true);
		}
		if (!email) {
			setEmailError(true);
		}

		if (!password) {
			setPasswordError(true);
		}

		if (!userName || !email || !password) {
			return;
		} else {
			console.log('api call');
		}
	};

	return (
		<div style={{ marginTop: '10%' }} className="text-center">
			<div style={{ maxWidth: '450px', margin: 'auto', padding: '0 10px' }}>
				<h3>Vision | Sign up</h3>
				<br />
				<form method="post" onSubmit={onSubmit}>
					<div className="form-group">
						<input
							placeholder="Username"
							className="form-control"
							value={userName}
							onChange={(event) => setUserName(event.target.value)}
						/>
						{userNameError && (
							<div className="text-danger text-left font-size-14">Please enter username</div>
						)}
					</div>

					<div className="form-group">
						<input
							placeholder="Email"
							className="form-control"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
						{emailError && <div className="text-danger text-left font-size-14">Please enter email</div>}
					</div>
					<div className="form-group">
						<input
							placeholder="Password"
							className="form-control"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						{passwordError && (
							<div className="text-danger text-left font-size-14">Please enter password</div>
						)}
					</div>
					<p>
						Already have an account? <Link to="/signin">Signin</Link> | <Link to="/">Home</Link>
					</p>
					<div className="text-center">
						<input
							type="submit"
							className="btn"
							value="Sign up"
							style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
