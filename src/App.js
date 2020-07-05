import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom'

// CONTAINERS
import Home from './containers/home/Home';
import ArticleDetail from './containers/article-detail/ArticleDetail';
import Signin from './containers/signin/Signin';
import Signup from './containers/signup/Signup';

function App() {
	return (
		<BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/detail/:id" exact component={ArticleDetail} />
      <Route path="/signin" exact component={Signin}/>
      <Route path="/signup" exact component={Signup} />
    </BrowserRouter>
	);
}

export default App;
