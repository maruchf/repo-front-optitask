import React from "react";
import "../../styles/calculator.scss";
export const Calculator = () => {
	return (
		<div className="calculator-exchange">
			<h5>Calculadora cambiaria</h5>
			<div className="row">
				<div className="col-md-3">
					<select className="custom-select">
						<option>$</option>
						<option>€</option>
						<option>Bitcoin</option>
						<option>BsF</option>
					</select>
				</div>
				<div className="col-md-3">
					<input type="number" className="form-control" />
				</div>
				<div className="col-md-3">
					<select className="custom-select">
						<option>$</option>
						<option>€</option>
						<option>Bitcoin</option>
						<option>BsF</option>
					</select>
				</div>
				<div className="col-md-3">
					<h5 className="text-light">XX,xx</h5>
				</div>
			</div>
		</div>
	);
};
