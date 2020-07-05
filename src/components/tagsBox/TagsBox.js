import React from 'react';

const TagsBox = ({ tags }) => {
	return (
		<div style={{ backgroundColor: 'lightgrey', borderRadius: '3px' }} className="p-2">
			<h5>Popular Tags</h5>
			{tags.map((tag) => <span class="badge badge-pill badge-info mx-1">{tag.toUpperCase()}</span>)}
		</div>
	);
};

export default TagsBox;
