import React from "react";
import "../../styles/groups.scss";
export const Groups = () => {
	return (
		<div>
			<h3>Groups</h3>
			<div className="row">
				<div className="col-md-4 text-center">
					<div className="card">
						<div className="card-body">
							<div className="rounded-circle bg-warning p-4 d-inline-block" />
							<h5 className="card-title">Group 1</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4 text-center">
					<div className="card">
						<div className="card-body">
							<div className="rounded-circle bg-warning p-4 d-inline-block" />
							<h5 className="card-title">Group 2</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4 text-center">
					<div className="card">
						<div className="card-body">
							<div className="rounded-circle bg-warning p-4 d-inline-block" />
							<h5 className="card-title">Group 3</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
