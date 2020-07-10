import React from 'react';
import { PRIMARY, SECONDARY, WHITESMOKE, WHITE } from '../../utils/colorConstants';
import { Link } from 'react-router-dom';
import UserAvtar from '../user-avtar/UserAvtar';
import { isUserLoggedIn } from '../../utils/commonMethods';

const Articles = ({ articles, history, onFavoriteClick, loading }) => {
	const getLimitedWords = (word) => {
		return word.slice(0, 180);
	};

	const isLoggedInUser = isUserLoggedIn();

	return (
		<div className="p-2">
			{loading ? 'Loading articles ...' : null}
			{articles.map((article, index) => {
				return (
					<div className="card mt-2" key={index}>
						<div className="card-body">
							<div style={{ display: 'flex' }}>
								<UserAvtar
									image={article.author.image}
									username={article.author.username}
									createdAt={article.createdAt}
								/>
								<div className="ml-auto">
									<span className="mr-1" style={{ color: SECONDARY, fontWeight: '500' }}>
										{article.favoritesCount}
									</span>
									{article.favorited ? (
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-suit-heart-fill"
											fill={SECONDARY}
											xmlns="http://www.w3.org/2000/svg"
											onClick={() => {
												if (isLoggedInUser) {
													onFavoriteClick(article.slug, 'remove');
												}
											}}
											style={{ cursor: isLoggedInUser ? 'pointer' : 'auto' }}
										>
											<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
										</svg>
									) : (
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-heart"
											fill={SECONDARY}
											xmlns="http://www.w3.org/2000/svg"
											onClick={() => {
												if (isLoggedInUser) {
													onFavoriteClick(article.slug, 'add');
												}
											}}
											style={{ cursor: isLoggedInUser ? 'pointer' : 'auto' }}
										>
											<path
												fillRule="evenodd"
												d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
											/>
										</svg>
									)}
								</div>
							</div>
							<hr />
							<Link to={`/detail/${article.slug}`} style={{ textDecoration: 'none', color: PRIMARY }}>
								<h5 style={{ textTransform: 'capitalize' }}>{article.title}</h5>
							</Link>
							<h6>{article.description}</h6>
							<p>{getLimitedWords(article.body)} ...</p>
							<div>
									{article.tagList.map((tag, index) => {
										return (
											<span
												className="badge badge-pill mr-1"
												style={{ backgroundColor: SECONDARY, color: PRIMARY, fontSize: 10 }}
												key={index}
											>
												{tag.toUpperCase()}
											</span>
										);
									})}
								</div>
							<div className="text-right">
								
								<Link
									to={`/detail/${article.slug}`}
									className="btn"
									style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}
								>
									Read more
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Articles;
