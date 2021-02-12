import React, { useEffect, useState } from "react";
import "../../styles/signup.scss";

export const Register = () => {
	// const [checked, setChecked] = useState(initialState);
	return (
		<div>
			<div className="container d-flex justify-content-center">
				<div className="row">
					<div className="col-8">
						<div className="row singup text-center">
							<h1>Registro</h1>
						</div>
						<div className="row">
							<form>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label forHTML="inputEmail4">Email</label>
										<input type="email" className="form-control" id="inputEmail4" placeholder="Email">
									</div>
									<div className="form-group col-md-6">
									<label forHTML="inputPassword4">Password</label>
									<input type="password" className="form-control" id="inputPassword4" placeholder="Password">
									</div>
								</div>
								<div className="form-group">
									<label forHTML="inputAddress">Address</label>
									<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St">
								</div>
								<div className="form-group">
									<label forHTML="inputAddress2">Address 2</label>
									<input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label forHTML="inputCity">City</label>
										<input type="text" className="form-control" id="inputCity">
									</div>
									<div className="form-group col-md-4">
										<label forHTML="inputState">State</label>
										<select id="inputState" className="form-control">
											<option selected>Choose...</option>
											<option>...</option>
										</select>
									</div>
									<div className="form-group col-md-2">
										<label forHTML="inputZip">Zip</label>
										<input type="text" className="form-control" id="inputZip">
									</div>
								</div>
								<div className="form-group">
									<div className="form-check">
									<input className="form-check-input" type="checkbox" id="gridCheck">
									<label className="form-check-label" forHTML="gridCheck">
										Check me out
									</label>
									</div>
								</div>
								<button type="submit" className="btn btn-primary">Sign in</button>
							</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
