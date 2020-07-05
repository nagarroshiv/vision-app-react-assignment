import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleDetailAction } from './action';
import { SECONDARY } from '../../utils/colorConstants';
import UserAvtar from '../../components/user-avtar/UserAvtar';

const ArticleDetail = (props) => {
	const articleId = props.match.params.id;

	const dispatch = useDispatch();
	const article = useSelector((state) => state.articleDetail.article);

	useEffect(() => {
		dispatch(getArticleDetailAction(articleId));
	}, []);

	console.log(article, article);

	return (
		<div>
			<Header />
			<div
				style={{
					backgroundColor: SECONDARY,
					minHeight: '150px',
					display: 'flex',
					direction: 'column',
					alignItems: 'center'
				}}
			>
				<div className="container">
					<h2>{article.title}</h2>
					{article.author && (
						<UserAvtar
							image={article.author.image}
							username={article.author.username}
							createdAt={article.createdAt}
						/>
					)}
				</div>
			</div>
			<div className="container pt-3">
				<p>{article.body}</p>
			</div>
		</div>
	);
};

export default ArticleDetail;
