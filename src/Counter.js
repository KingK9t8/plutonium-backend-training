import React from "react";

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	increaseCounter() {
		this.setState({
			count: this.state.count - 0 + 1,
		});
	}
	decreaseCounter() {
		this.setState({
			count: this.state.count - 1,
		});
	}
	changeInputValue(value) {
		this.setState({
			count: value,
		});
	}
	showEvenOdd() {
		return this.state.count % 2 === 0 ? <span>even </span> : <span>odd</span>;
	}
	render() {
		return (
			<div>
				<p>Count-{this.state.count}</p>
				<input
					type="number"
					value={this.state.count}
					onChange={(event) => this.changeInputValue(event.target.value)}
				/>
				<button onClick={() => this.increaseCounter()}>Increase</button>
				<button onClick={() => this.decreaseCounter()}>Decrease</button>
				<div>
					{/* {this.state.count % 2 === 1 && <span>odd</span>}
					{this.state.count % 2 === 0 && <span>even</span>} */}
					{/* {this.state.count % 2 === 0 ? <span>even </span> : <span>odd</span>} */}
					{this.showEvenOdd()}
				</div>
			</div>
		);
	}
}

export default Counter;
