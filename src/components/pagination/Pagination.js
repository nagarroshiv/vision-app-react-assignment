import React from 'react';
import { PRIMARY, WHITESMOKE } from '../../utils/colorConstants';

const Pagination = ({ totalCount, changePageNumber }) => {
	const generateArray = (totalCount) => {
		const pages = Math.ceil(totalCount / 10);
		const arr = [];
		for (let i = 1; i <= pages; i++) {
			arr.push(i);
		}
		return arr;
	};
	return (
		<div style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
			{generateArray(totalCount).map((item) => {
				return (
					<button
						onClick={() => {
							changePageNumber(item);
						}}
						className="btn m-1"
						style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}
						key={item}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;
