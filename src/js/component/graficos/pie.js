import React from "react";
import PropTypes from "prop-types";
import { Pie as Grafico } from "react-chartjs-2";

export const Pie = ({ labels, data, backgroundColor, title }) => (
	<div className="container">
		<div className="row mt-4">
			<div className="col-md-6 offset-2">
				<div className="card">
					<div className="card-body">
						<Grafico
							data={{
								labels,
								datasets: [
									{
										label: title,
										data,
										backgroundColor
									}
								]
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

Pie.propTypes = {
	labels: PropTypes.array,
	data: PropTypes.array,
	backgroundColor: PropTypes.array,
	title: PropTypes.array
};
