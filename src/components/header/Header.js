import React, { useEffect } from 'react';
import { PRIMARY } from '../../utils/colorConstants';
import { Link } from 'react-router-dom';
import { isUserLoggedIn } from '../../utils/commonMethods';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetailAction } from '../../containers/signin/action';

const Header = ({history, match}) => {

	// const id = match.params.id;

	const loggedIn = isUserLoggedIn();

	const dispatch = useDispatch();
	const user = useSelector((state) => state.signin.user);

	useEffect(() => {
		dispatch(getUserDetailAction());
	}, []);

	const logout = () => {
		localStorage.clear();
		history.push('/')
	};

	return (
		<nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: PRIMARY }}>
			<Link className="navbar-brand" to="/">
				Vision
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					{!loggedIn && (
						<li className="nav-item">
							<Link className="nav-link" to="/signin">
								Sign in
							</Link>
						</li>
					)}
					{!loggedIn && (
						<li className="nav-item">
							<Link className="nav-link" to="/signup">
								Signup
							</Link>
						</li>
					)}
					{loggedIn && (
						<li className="nav-item">
							<Link className="nav-link" to="/create">
								Create Article
							</Link>
						</li>
					)}
					{loggedIn && (
						<li className="nav-item">
							<Link className="nav-link" to="/account">
								{user.username}
							</Link>
						</li>
					)}
					{loggedIn && (
						<li className="nav-item">
							<Link className="nav-link" onClick={logout} to={false}>
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									className="bi bi-power"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"
									/>
									<path fillRule="evenodd" d="M7.5 8V1h1v7h-1z" />
								</svg>{' '}
								Logout
							</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
