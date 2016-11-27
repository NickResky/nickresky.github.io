import React from "react";
import { Link } from "react-router";
import LoadingBar from 'react-redux-loading-bar'

import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Nav from "./../components/layout/Nav";
import InstantSearchBox from "./../components/InstantSearchBox";

export default class Layout extends React.Component {
	render() {
		return  (
			<div>
				<LoadingBar class="zenkit-loading-bar"/>
				<Nav />
				<InstantSearchBox/>
				<div class="main-container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
