import React from "react";

class FormComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: "",
			showPreview: false,
		};
	}
	handleFormSubmit(event) {
		event.preventDefault();
		this.setState({
			showPreview: true,
		});
	}
	handleFormReset(event) {
		event.preventDefault();
		this.setState({
			showPreview: false,
			inputText: "",
		});
	}
	onChange(value) {
		this.setState({
			inputText: value,
		});
	}
	render() {
		return (
			<div>
				<form
					onSubmit={(event) => this.handleFormSubmit(event)}
					onReset={(event) => this.handleFormReset(event)}
				>
					<input
						type="text"
						value={this.state.inputText}
						onChange={(event) => this.onChange(event.target.value)}
					/>
					<button type="submit">Submit</button>
					<button type="reset">Reset</button>
				</form>
				{this.state.showPreview && (
					<div>
						<h2>Preview Form Data</h2>
						<p>{this.state.inputText}</p>
					</div>
				)}
			</div>
		);
	}
}

export default FormComponent;
