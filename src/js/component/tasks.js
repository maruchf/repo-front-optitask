import React from "react";
import "../../styles/tasks.scss";
export const Tasks = () => {
	return (
		<div>
			<h3>Tasks</h3>
			<div className="card mb-3">
				<div className="card-body">
					<div className="row">
						<div className="col-4">
							<div className="rounded-circle bg-warning p-4 d-inline-block" />
						</div>
						<div className="col-8">
							<h5 className="card-title">task 1</h5>
							<p className="card-text">task description</p>
						</div>
					</div>
				</div>
			</div>
			<div className="card mb-3">
				<div className="card-body">
					<div className="row">
						<div className="col-4">
							<div className="rounded-circle bg-warning p-4 d-inline-block" />
						</div>
						<div className="col-8">
							<h5 className="card-title">task 2</h5>
							<p className="card-text">task description</p>
						</div>
					</div>
				</div>
			</div>
			<div className="card mb-3">
				<div className="card-body">
					<div className="row">
						<div className="col-4">
							<div className="rounded-circle bg-warning p-4 d-inline-block" />
						</div>
						<div className="col-8">
							<h5 className="card-title">task 3</h5>
							<p className="card-text">task description</p>
						</div>
					</div>
				</div>
			</div>
			<div className="card mb-3">
				<div className="card-body">
					<div className="row">
						<div className="col-4">
							<div className="rounded-circle bg-warning p-4 d-inline-block" />
						</div>
						<div className="col-8">
							<h5 className="card-title">task 4</h5>
							<p className="card-text">task description</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
