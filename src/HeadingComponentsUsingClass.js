import React from "react";

class HeadingComponentsUsingClass extends React.Component {
	constructor() {
		super();
		console.log("hello from constructor");
		this.state = {
			a: 2,
			b: 2,
		};
		this.update();
	}
	update() {
		console.log("value is being updated");
		setTimeout(() => {
			this.setState({
				a: this.state.a + 1,
			})
				// () => console.log("value updated successfully");
		}, 2000);
	}
	// componentDidMount() {
	// 	console.log("Hello from didMount");
	// 	this.update();
	// }
	// componentDidUpdate() {
	// 	console.log("component DidUpdate");
	// }
	// componentWillUnmount() {
	// 	console.log("component WillUnmount");
	// }
	render() {
		return (
			<div>
				<h1>Class component - {this.props.title}</h1>
				<p>Value : {this.state.a}</p>
			</div>
		);
	}
}

export default HeadingComponentsUsingClass;
