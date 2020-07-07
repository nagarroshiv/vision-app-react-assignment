import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleDetailAction, getArticleCommentsAction, deleteCommentAction } from './action';
import { SECONDARY, PRIMARY, WHITESMOKE } from '../../utils/colorConstants';
import UserAvtar from '../../components/user-avtar/UserAvtar';

const ArticleDetail = (props) => {
	const articleId = props.match.params.id;

	const dispatch = useDispatch();
	const article = useSelector((state) => state.articleDetail.article);
	const comments = useSelector((state) => state.articleDetail.comments);
	const userName = useSelector((state) => state.signin.user.username);
	const deletingComment = useSelector((state) => state.articleDetail.deletingComment);

	console.log('deletingComment', deletingComment);

	useEffect(() => {
		dispatch(getArticleDetailAction(articleId));
	}, []);

	useEffect(() => {
		if (!deletingComment) {
			dispatch(getArticleCommentsAction(articleId));
		} 
	}, [deletingComment])

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
				<p style={{ fontSize: 16 }}>{article.body}</p>
				<hr />
				<div className="p-5">
					<form>
						<div className="form-group">
							<textarea className="form-control" rows={4} placeholder="Write a comment" />
						</div>
						<div className="text-right">
							<button className="btn" style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}>
								Post Comment
							</button>
						</div>
					</form>
					<div className="mt-5">
						<h5>Comments</h5>
						{comments.map((comment) => {
							return (
								<div className="card mt-2">
									<div className="card-body">
										<div className="d-flex">
											<UserAvtar
												image={comment.author.image}
												username={comment.author.username}
												createdAt={comment.createdAt}
											/>
											<div className="ml-auto">
												{userName === comment.author.username ? (
													<svg
														width="1.5em"
														height="1.5em"
														viewBox="0 0 16 16"
														className="bi bi-trash-fill"
														fill="red"
														xmlns="http://www.w3.org/2000/svg"
														style={{ cursor: 'pointer' }}
														onClick={() => {
															dispatch(deleteCommentAction(articleId, comment.id));
														}}
													>
														<path
															fillRule="evenodd"
															d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
														/>
													</svg>
												) : null}
											</div>
										</div>

										<hr />
										{comment.body}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleDetail;
