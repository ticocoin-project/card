import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NotFound extends Component {
	render() {
		return (
			<div className="m-0 vh-100 row justify-content-center align-items-center">
				<div id="content">
					<div className="container-fluid">
						{/* <!-- 404 Error Text --> */}
						<div className="text-center">
							<div className="error mx-auto" data-text="404">
								404
							</div>
							<p className="lead text-gray-800 mb-5">
								Page Not Found
							</p>
							<p className="text-gray-500 mb-0">
								Parece que encontró un error en la matriz ......
							</p>
							<Link to="/">&larr; Volver al inicio</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default NotFound;
