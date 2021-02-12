import React, { useEffect, useState } from "react";
import "../../styles/signup.scss";

export const Register = () => {
	// const [checked, setChecked] = useState(initialState);
	return (
		<div>
			<div className="register-form">
				<div className="cotainer-fluid">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="card">
								<div className="card">{"Iniciar sesión"}</div>
								<div className="card-body">
									<form action="" method="">
										<div className="form-group row">
											<label
												htmlFor="email_address"
												className="col-md-4 col-form-label text-md-right">
												{"Correo electrónico"}
											</label>
											<div className="col-md-6">
												<input
													type="text"
													id="email_address"
													className="form-control"
													name="email-address"
													required
													autoFocus
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="user_name"
												className="col-md-4 col-form-label text-md-right">
												{"Nombre de usuario"}
											</label>
											<div className="col-md-6">
												<input
													type="user_na,e"
													id="user_name"
													className="form-control"
													name="user-name"
													required
												/>
											</div>
										</div>
										<div className="form-group row">
											<label htmlFor="password" className="col-md-4 col-form-label text-md-right">
												{"Contraseña"}
											</label>
											<div className="col-md-6">
												<input
													type="password"
													id="password"
													className="form-control"
													name="password"
													required
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="password-confirmed"
												className="col-md-4 col-form-label text-md-right">
												{"Confirma tu contraseña"}
											</label>
											<div className="col-md-6">
												<input
													type="password-confirmed"
													id="password-confirmed"
													className="form-control"
													name="password-confirmed"
													required
												/>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-md-6 offset-md-4">
												<div className="checkbox">
													<input
														type="checkbox"
														name="remember"
														//  onChange=(checked)=>{
														//  setChecked(checked);
														//  onChange(id, checked);}
													/>
													<label>{"Recordarme"}</label>
												</div>
											</div>
										</div>
										<div>
											<a href="#" className="btn btn-link">
												{"¿Has olvidado tu contraseña?"}
											</a>
										</div>
										<div className="col-md-6 offset-md-4">
											<button type="submit" className="btn btn-primary">
												{"Entrar"}
											</button>
											<a href="#" className="btn btn-link">
												{"¿Eres nuevo? ¡Regístrate!"}
											</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
