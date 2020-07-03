import React from 'react';
import { PRIMARY } from '../../utils/colorConstants';

const Header = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: PRIMARY }}>
			<a className="navbar-brand" href="#">
				Vision
			</a>
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
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
