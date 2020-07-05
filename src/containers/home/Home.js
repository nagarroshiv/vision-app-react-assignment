import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getTagsAction } from './action';
import TagsBox from '../../components/tagsBox/TagsBox';

const Home = () => {
	const dispatch = useDispatch();
	const tags = useSelector((state) => state.home.tags);

	useEffect(() => {
		console.log('wah');
		dispatch(getTagsAction());
	}, []);

	return (
		<div>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-md-9" />
					<div className="col-md-3 p-3">
						<TagsBox tags={tags} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
