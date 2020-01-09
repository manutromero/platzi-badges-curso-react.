import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import api from "../api";

class Badges extends React.Component {
	constructor(props) {
		super();
		console.log("1, soy el constructor");
		this.state = {
			data: [],
			loading: true,
			error: null,
		};
	}

	componentDidMount() {
		console.log("3, soy el didmount");

		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });
		try {
			const data = await api.badges.list();
			this.setState({ loading: false, data: data });
			console.log("data", data);
		} catch (error) {
			console.log("error", error);
			this.setState({ loading: false, error: error });
			console.log("desde el esatDOOO", this.state.error);
		}
	};
	componentDidUpdate(prevProps, prevState) {
		console.log("5 - componentDidUpdate");
		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		console.log("Props", this.props);
		console.log("State", this.state);
	}

	componentWillUnmount() {
		console.log("6 - willUnmount");
		clearTimeout(this.timeoutID);
	}
	render() {
		console.log("2, render");
		if (this.state.loading === true) {
			return "Loading...";
		}

		if (this.state.error) {
			return `Error: ${this.state.error.menssage}`;
		}

		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								className="Badges_conf-logo"
								src={confLogo}
								alt="Conf Logo"
							/>
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>

					<BadgesList badges={this.state.data} />
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
