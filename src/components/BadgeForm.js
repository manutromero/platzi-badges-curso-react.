import React from "react";

import "./styles/Badge.css";

class BadgeForm extends React.Component {
	// handleChange = e => {
	// 	this.setState({
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	handleClick = e => {
		console.log("button was click");
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log("submit was click");
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<h1>New Attendant</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label> First Name</label>
						<input
							onChange={this.props.onChange}
							type="text"
							name="firstName"
							className="form-control"
							value={this.props.formValues.firstName}
						></input>
					</div>

					<div className="form-group">
						<label> last Name</label>
						<input
							onChange={this.props.onChange}
							type="text"
							name="lastName"
							className="form-control"
							value={this.props.formValues.lastName}
						></input>
					</div>

					<div className="form-group">
						<label> Email</label>
						<input
							onChange={this.props.onChange}
							type="text"
							name="email"
							className="form-control"
							value={this.props.formValues.email}
						></input>
					</div>

					<div className="form-group">
						<label> job title</label>
						<input
							onChange={this.props.onChange}
							type="text"
							name="jobTitle"
							className="form-control"
							value={this.props.formValues.jobTitle}
						></input>
					</div>

					<div className="form-group">
						<label> twitter</label>
						<input
							onChange={this.props.onChange}
							type="text"
							name="twitter"
							className="form-control"
							value={this.props.formValues.twitter}
						></input>
					</div>

					<button
						onClick={this.handleClick}
						className="btn btn-primary"
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default BadgeForm;
