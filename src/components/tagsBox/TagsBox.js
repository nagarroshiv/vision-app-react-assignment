import React from 'react';
import { Link } from 'react-router-dom';
import { SECONDARY, PRIMARY, WHITESMOKE } from '../../utils/colorConstants';

const TagsBox = ({ tags, loading }) => {
	return (
		<div style={{ backgroundColor: SECONDARY, borderRadius: '3px' }} className="p-2">
			<h5>Popular Tags</h5>
			{loading && <small>Loading ...</small>}
			{!loading && tags.length === 0 ? 'No tags available' : null}
			{tags.map((tag, index) => (
				<span
					className="badge badge-pill mx-1"
					style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}
					key={index}
				>
					<Link style={{textDecoration: 'none', color: WHITESMOKE}} to={`/tag/${tag}`}>{tag.toUpperCase()}</Link>
				</span>
			))}
		</div>
	);
};

export default TagsBox;
