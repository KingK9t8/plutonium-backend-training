import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//function component
// const HeadingComponent = (props) => <h1>{props.title}</h1>;

//class component
// class HeadingComponentsUsingClass extends React.Component {
// 	render() {
// 		return <h1>Class component - {this.props.title}</h1>;
// 	}
// }

// const CurrentTime = () => (
// 	<p>
// 		{+new Date()}
// 		<HeadingComponentsUsingClass title="Inside component" />
// 	</p>
// );

// setInterval(() => {
// 	root.render(
// 		<React.StrictMode>
// 			<HeadingComponent title="Hello from component" />
// 			{/* <HeadingComponentsUsingClass /> */}
// 			<CurrentTime />
// 		</React.StrictMode>
// 	);
// }, 1000);

const Logo = () => {
	return (
		<div id="logo">
			<img src="google-logo.png" className="logo" alt="Google" />
		</div>
	);
};

// const SearchBar = () => {
// 	<div id="searchbar">
// 		<form>
// 			<input type="text" />
// 		</form>
// 	</div>;
// };

const SearchBar = () => {
	return (
		<div id="search-bar">
			<form className="search-bar">
				<input type="text" placeholder="Search" />
			</form>
		</div>
	);
};

const Buttons = () => {
	return (
		<div id="buttons">
			<button className="buttons" type="submit">
				Search
			</button>
			<button className="buttons" type="submit">
				I am feeling lucky!
			</button>
		</div>
	);
};

const Languages = (props) => {
	return (
		<div id="languages">
			<h4>Google offered in : </h4>
			<a href="google.com"> {props.languages}</a>
		</div>
	);
};

root.render(
	<React.StrictMode>
		<Logo />
		<SearchBar />
		<Buttons />
		<Languages languages="Bengali" />
	</React.StrictMode>
);
