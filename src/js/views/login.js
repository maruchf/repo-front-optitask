import React, { useEffect, useState, useContext } from "react";
import "../../styles/login.scss";
import { Navbar } from "../component/navbar";
import imagen2 from "../../img/imagen2.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Login = () => {
	const { store, actions } = useContext(Context);
	// const [checked, setChecked] = useState(initialState);
	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL USUARIO
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [login, setLogin] = useState(formData); //Hook estado para guardar info de inputs
	// //función que guarda los datos en el estado de registro a medida que son completados,
	// //cambian el estado inicial vacío a los valores
	const changeEmail = e => {
		setEmail(e.target.value);
	};
	const changePassword = e => {
		setPassword(e.target.value);
	};
	const checkLogin = e => {
		if (email != "" && password != "") {
			let data_login = {
				email: email,
				password: password
			};
			console.log(data_login);
			actions.loginUser(data_login);
		} else {
			alert("no se pueden dejar campos vacíos");
		}
	};
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
										pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
										onChange={changeEmail}
									/>
								</div>
								<div className="form-group">
									<input
										className="form-control"
										placeholder="contraseña"
										type="password"
										name="password"
										pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" //revisar criterios
										//solicita al menos 1 mayúscula, 1 minúscula, 1 caractér especial, 1 número
										onChange={changePassword}
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
										<Link className="text-link" to="#">
											{"¿Has olvidado tu contraseña?"}
										</Link>
									</div>
								</div>
								<div className="form-group">
									<button type="button" className="btn btn-primary mt-5 btn-lg" onClick={checkLogin}>
										{"Entrar"}
									</button>
									<div className="mt-2">
										<Link to="#" className="text-link">
											{"¿Eres nuevo? ¡Regístrate!"}
										</Link>
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
