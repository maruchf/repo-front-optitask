import React, { useEffect, useState } from "react";
import "../../styles/login.scss";
import { Navbar } from "../component/navbar";
import imagen2 from "../../img/imagen2.png";
export const Login = () => {
	// const [checked, setChecked] = useState(initialState);
	return (
		<div>
			<div className="form-login">
				<div className="container bg-light">
					<div className="row justify-content-center">
						<div className="col-md-6 col-sm-12">
							<h1>Iniciar sesión</h1>
							<form>
								<div className="form-group">
									<label htmlFor="txtEmail">correo electrónico</label>
									<input
										className="form-control"
										placeholder="escribe tu correo electrónico"
										id="txtEmail"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="txtPassword">contraseña</label>
									<input
										className="form-control"
										placeholder="escribe tu contraseña"
										type="password"
										id="txtPassword"
									/>
								</div>
								<div className="form-group">
									<div className="checkbox">
										<input type="checkbox" name="remember" />
										<label>{"Recordarme"}</label>
									</div>
								</div>
								<div>
									<a href="#" className="btn btn-link">
										{"¿Has olvidado tu contraseña?"}
									</a>
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-primary">
										{"Entrar"}
									</button>
									<a href="#" className="btn btn-link">
										{"¿Eres nuevo? ¡Regístrate!"}
									</a>
								</div>
							</form>
						</div>
						<div className="col-md-6 col-sm-12">
							<img src={imagen2} className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
