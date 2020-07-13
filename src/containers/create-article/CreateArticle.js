import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { PRIMARY, WHITESMOKE } from '../../utils/colorConstants';
import { useDispatch, useSelector } from 'react-redux';
import { createArticleAction, updateArticleAction } from './action';
import { getArticleDetailAction } from '../article-detail/action';
import { actionCreator } from '../../utils/reduxUtils';
import { createArticleActionTypes } from './constants';

const CreateArticle = ({ history, match }) => {
	const [ title, setTitle ] = useState('');
	const [ shortDescription, setShortDescription ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ tags, setTags ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('');

	const articleId = match.params.id;

	const dispatch = useDispatch();
	const article = useSelector((state) => state.createArticle.article);
	const loadingCreateArticle = useSelector((state) => state.createArticle.loadingCreateArticle);
	const articleDetail = useSelector((state) => state.articleDetail.article);


	useEffect(() => {
		dispatch(getArticleDetailAction(articleId));
	}, []);

	useEffect(
		() => {
			setTitle(articleDetail.title ? articleDetail.title : '');
			setShortDescription(articleDetail.description ? articleDetail.description : '');
			setDescription(articleDetail.body ? articleDetail.body : '');
			setTags(articleDetail.tagList && articleDetail.tagList.length ? articleDetail.tagList.join(' ') : '');
		},
		[ articleDetail ]
	);

	if (article.slug) {
		history.push(`/detail/${article.slug}`);
		dispatch(actionCreator(createArticleActionTypes.createArticle.FAILURE));
	}

	const createArticle = (event) => {
		event.preventDefault();

		// VALIDATIONS
		if (!title) {
			setErrorMessage('* Title is required');
			return;
		}

		if (!shortDescription) {
			setErrorMessage('* Short description is required');
			return;
		}

		if (!description) {
			setErrorMessage('* Description is required');
			return;
		}

		if (!tags) {
			setErrorMessage('* Tags are required');
			return;
		}

		const form_body = {
			title,
			description: shortDescription,
			body: description,
			tagList: tags.split(' ')
		};

		dispatch(createArticleAction(form_body));
	};

	const updateArticle = (event) => {
		event.preventDefault();

		// VALIDATIONS
		if (!title) {
			setErrorMessage('* Title is required');
			return;
		}

		if (!shortDescription) {
			setErrorMessage('* Short description is required');
			return;
		}

		if (!description) {
			setErrorMessage('* Description is required');
			return;
		}

		if (!tags) {
			setErrorMessage('* Tags are required');
			return;
		}

		const form_body = {
			title,
			description: shortDescription,
			body: description,
			tagList: tags.split(' ')
		};

		dispatch(updateArticleAction(form_body, articleId));
	};

	return (
		<div>
			<Header history={history} match={match} />
			<div className="container">
				<div className="pt-5 mx-auto" style={{ maxWidth: '500px' }}>
					<div className="text-center">
						<h3>{articleId ? 'Update' : 'Create'} Article</h3>
					</div>
					<form method="post" onSubmit={articleId ? updateArticle : createArticle}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Article Title"
								value={title}
								disabled={loadingCreateArticle}
								onChange={(event) => setTitle(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="What's the article about?"
								value={shortDescription}
								disabled={loadingCreateArticle}
								onChange={(event) => setShortDescription(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<textarea
								type="text"
								className="form-control"
								placeholder="Article description (markdown)"
								rows="5"
								style={{ resize: 'none' }}
								value={description}
								disabled={loadingCreateArticle}
								onChange={(event) => setDescription(event.target.value)}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Article Tags (comma separated)"
								value={tags}
								disabled={loadingCreateArticle}
								onChange={(event) => setTags(event.target.value)}
							/>
						</div>
						<p className="text-danger">{errorMessage}</p>
						<div className="text-right">
							<button
								disabled={loadingCreateArticle}
								className="btn"
								style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateArticle;
