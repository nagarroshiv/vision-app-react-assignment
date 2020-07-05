import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getTagsAction, getArticles } from './action';
import TagsBox from '../../components/tagsBox/TagsBox';
import Articles from '../../components/articles/Articles';

const Home = ({ history }) => {
	const dispatch = useDispatch();
	const tags = useSelector((state) => state.home.tags);
	const loadingTag = useSelector((state) => state.home.loadingTag);
	const articles = useSelector((state) => state.home.articles);

	useEffect(() => {
		dispatch(getTagsAction());
		dispatch(getArticles());
	}, []);

	return (
		<div>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<Articles articles={articles} history={history} />
					</div>
					<div className="col-md-3 p-3">
						<TagsBox tags={tags} loading={loadingTag} history={history} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
