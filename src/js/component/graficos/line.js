import React from "react";
import PropTypes from "prop-types";
import { Line as Grafico } from "react-chartjs-2";

export const Line = ({ labels, data, backgroundColor, title }) => (
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

Line.propTypes = {
	labels: PropTypes.array,
	data: PropTypes.array,
	backgroundColor: PropTypes.array,
	title: PropTypes.array
};
