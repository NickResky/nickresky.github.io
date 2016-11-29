
// tutorial
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import List from "./pages/List";
import SectionPage from "./pages/SectionPage";
import store from "./store";
import { Provider } from "react-redux";

require('./../scss/style.scss');

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={List}></IndexRoute>
				<Route path="lists/:listId" component={List}></Route>
				<Route path="lists/:listId/sections/:sectionId(/entries/:entryId)" component={SectionPage}></Route>
				<Redirect from="knowledgebase" to="lists/HJQBQ1Hw" />
			</Route>
		</Router>
	</Provider>
, app);
