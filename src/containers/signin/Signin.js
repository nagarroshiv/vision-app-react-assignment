import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ emailError, setEmailError ] = useState(false);
	const [ passwordError, setPasswordError ] = useState(false);

	const resetForm = (type) => {
		if (type === 'all') {
			setEmail('');
			setPassword('');
		}
		setEmailError(false);
		setPasswordError(false);
	};

	const onSubmit = (event) => {
        event.preventDefault();
        
        // reset validation
        resetForm()

		// Validation
		if (!email) {
			setEmailError(true);
		}

		if (!password) {
			setPasswordError(true);
		}

		if (!email || !password) {
			return;
		} else {
			console.log('api call');
		}
	};

	return (
		<div style={{ marginTop: '10%' }} className="text-center">
			<div style={{ maxWidth: '450px', margin: 'auto', padding: '0 10px' }}>
				<h3>Vision | Sign in</h3>
				<br />
				<form method="post" onSubmit={onSubmit}>
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
						Need an account? <Link to="/signup">Signup</Link> | <Link to="/">Home</Link>
					</p>
					<div className="text-center">
						<input type="submit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signin;
