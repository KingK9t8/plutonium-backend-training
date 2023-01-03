import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeadingComponent from "./HeadingComponent";
import HeadingComponentsUsingClass from "./HeadingComponentsUsingClass";
import Counter from "./Counter";
import List from "./List";
import FormComponent from "./Form";

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

root.render(
	<React.StrictMode>
		<HeadingComponent />
		<HeadingComponentsUsingClass title="class component" />
		<Counter />
		<List />
		<FormComponent />
	</React.StrictMode>
);
