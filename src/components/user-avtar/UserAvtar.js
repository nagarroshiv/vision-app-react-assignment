import React from 'react';
import defaultUser from '../../static/images/defaultuser.png';
import { PRIMARY } from '../../utils/colorConstants';

const UserAvtar = ({ image, username, createdAt }) => {
	const formatDate = (date) => {
		const D = new Date(date);
		return `${D.getDate()}-${D.getMonth() + 1}-${D.getFullYear()}`;
	};

	return (
		<div>
			<img
				src={image ? image : defaultUser}
				alt="user avtar"
				height={30}
				width={30}
				style={{ borderRadius: '25px' }}
			/>
			<span className="ml-2" style={{ color: PRIMARY }}>
				{username.toUpperCase()} | {formatDate(createdAt)}
			</span>
		</div>
	);
};

export default UserAvtar;
