import React from "react";
import PropTypes from "prop-types";
import { Bar as Grafico } from "react-chartjs-2";
import { TRUE } from "node-sass";

export const Bar = ({ labels, data, backgroundColor, title }) => {
	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col-md-12 col-sm-6">
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
};

Bar.propTypes = {
	labels: PropTypes.array,
	data: PropTypes.array,
	backgroundColor: PropTypes.array,
	title: PropTypes.array
};
