import React, { useEffect, useState, useRef } from 'react';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
	getArticleDetailAction,
	getArticleCommentsAction,
	deleteCommentAction,
	createCommentAction,
	deleteArticleAction
} from './action';
import { SECONDARY, PRIMARY, WHITESMOKE } from '../../utils/colorConstants';
import UserAvtar from '../../components/user-avtar/UserAvtar';

const ArticleDetail = (props) => {
	const articleId = props.match.params.id;

	const [ comment, setComment ] = useState('');

	const dispatch = useDispatch();
	const article = useSelector((state) => state.articleDetail.article);
	const comments = useSelector((state) => state.articleDetail.comments);
	const userName = useSelector((state) => state.signin.user.username);
	const deletingArticle = useSelector((state) => state.articleDetail.deletingArticle);
	const deletingComment = useSelector((state) => state.articleDetail.deletingComment);
	const creatingComment = useSelector((state) => state.articleDetail.creatingComment);

	useEffect(() => {
		dispatch(getArticleDetailAction(articleId));
	}, []);

	useEffect(
		() => {
			if (!deletingComment) {
				dispatch(getArticleCommentsAction(articleId));
			}
		},
		[ deletingComment, creatingComment ]
	);

	const isInitialMount = useRef(true);

	useEffect(
		() => {
			if (isInitialMount.current) {
				isInitialMount.current = false;
			} else {
				if (!deletingArticle) {
					props.history.push('/');
				}
			}
		},
		[ deletingArticle ]
	);

	const onSubmitComment = (event) => {
		event.preventDefault();
		setComment('');
		dispatch(createCommentAction(articleId, { comment: { body: comment } }));
	};

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
					<h2>
						{article.title}{' '}
						{article.author &&
						userName === article.author.username && (
							<span className="ml-3">
								<svg
									width="0.8em"
									height="0.8em"
									viewBox="0 0 16 16"
									className="bi bi-pen"
									fill={PRIMARY}
									xmlns="http://www.w3.org/2000/svg"
									style={{ cursor: 'pointer' }}
									onClick={() => {
										alert('WIP');
									}}
								>
									<path
										fillRule="evenodd"
										d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"
									/>
									<path
										fillRule="evenodd"
										d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"
									/>
									<path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z" />
								</svg>
							</span>
						)}
						{article.author &&
						userName === article.author.username && (
							<span className="ml-2">
								<svg
									width="0.8em"
									height="0.8em"
									viewBox="0 0 16 16"
									className="bi bi-trash"
									fill={PRIMARY}
									xmlns="http://www.w3.org/2000/svg"
									style={{ cursor: 'pointer' }}
									onClick={() => {
										dispatch(deleteArticleAction(articleId));
									}}
								>
									<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
									<path
										fillRule="evenodd"
										d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
									/>
								</svg>
							</span>
						)}
					</h2>
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
					<form onSubmit={onSubmitComment} method="post">
						<div className="form-group">
							<textarea
								className="form-control"
								rows={4}
								placeholder="Write a comment"
								value={comment}
								disabled={creatingComment}
								onChange={(event) => setComment(event.target.value)}
							/>
						</div>
						<div className="text-right">
							<button
								type="submit"
								className="btn"
								disabled={creatingComment}
								style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}
							>
								Post Comment
							</button>
						</div>
					</form>
					<div className="mt-5">
						{comments.length ? <h5>Comments</h5> : null}
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
