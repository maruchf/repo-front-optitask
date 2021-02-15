import React, { useEffect, useState } from "react";
import "../../styles/login.scss";
import { Navbar } from "../component/navbar";
import imagen2 from "../../img/imagen2.png";
export const Login = () => {
	// const [checked, setChecked] = useState(initialState);
	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL USUARIO
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const formData = {
		email: "",
		password: ""
	};
	const [login, setLogin] = useState(formData); //Hook estado para guardar info de inputs
	//función que guarda los datos en el estado de registro a medida que son completados,
	//cambian el estado inicial vacío a los valores
	function changeLogin(e) {
		setLogin({
			...login,
			[e.target.name]: e.target.value
		});
	}
	return (
		<div>
			<div className="form-login d-flex align-items-center">
				<div className="container bg-light">
					<div className="row justify-content-center">
						<div className="col-md-6 col-sm-12 p-5 text-center">
							<h1 className="mb-5 text-muted">Iniciar sesión</h1>
							<form>
								<div className="form-group">
									<input
										className="form-control"
										placeholder="correo electrónico"
										name="email"
										onChange={changeLogin}
									/>
								</div>
								<div className="form-group">
									<input
										className="form-control"
										placeholder="contraseña"
										type="password"
										name="password"
										onChange={changeLogin}
									/>
								</div>
								<div className="row">
									<div className="col-auto">
										<div className="form-group">
											<div className="checkbox">
												<input
													type="checkbox"
													name="remember"
													className="mr-1"
													id="remember_me"
												/>
												<label htmlFor="remember_me">{"Recordarme"}</label>
											</div>
										</div>
									</div>
									<div className="col-auto ml-auto">
										<a className="text-link" href="#">
											{"¿Has olvidado tu contraseña?"}
										</a>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-primary mt-5 btn-lg">
										{"Entrar"}
									</button>
									<div className="mt-2">
										<a href="#" className="text-link">
											{"¿Eres nuevo? ¡Regístrate!"}
										</a>
									</div>
								</div>
							</form>
						</div>
						<div className="col-md-6 col-sm-12 d-none d-md-block">
							<img src={imagen2} className="img-fluid" style={{ opacity: 0.7 }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
