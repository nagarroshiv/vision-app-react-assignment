import React, { useState } from 'react';
import Header from '../../components/header/Header';
import { PRIMARY, WHITESMOKE } from '../../utils/colorConstants';
import { useDispatch, useSelector } from 'react-redux';
import { createArticleAction } from './action';

const CreateArticle = ({ history }) => {
	const [ title, setTitle ] = useState('');
	const [ shortDescription, setShortDescription ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ tags, setTags ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('');

	const dispatch = useDispatch();
	const article = useSelector((state) => state.createArticle.article);

	if (article.slug) {
		history.push(`/detail/${article.slug}`);
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

	return (
		<div>
			<Header />
			<div className="container">
				<div className="pt-5 mx-auto" style={{ maxWidth: '500px' }}>
					<form method="post" onSubmit={createArticle}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Article Title"
								value={title}
								onChange={(event) => setTitle(event.target.value)}
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="What's the article about?"
								value={shortDescription}
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
								onChange={(event) => setDescription(event.target.value)}
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="Article Tags (comma separated)"
								value={tags}
								onChange={(event) => setTags(event.target.value)}
							/>
						</div>
						<p className="text-danger">{errorMessage}</p>
						<div className="text-right">
							<button className="btn" style={{ backgroundColor: PRIMARY, color: WHITESMOKE }}>
								Create Article
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateArticle;
