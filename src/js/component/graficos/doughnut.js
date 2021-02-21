import React from "react";
import PropTypes from "prop-types";
import { Doughnut as Grafico } from "react-chartjs-2";

export const Doughnut = ({ labels, data, backgroundColor, title }) => (
	<div className="container">
		<div className="row mt-4">
			<div className="col-md-12">
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

Doughnut.propTypes = {
	labels: PropTypes.array,
	data: PropTypes.array,
	backgroundColor: PropTypes.array,
	title: PropTypes.array
};
