import React, { Fragment, useEffect, useState } from "react";
import "../../styles/signup.scss";

export const Signup = () => {
	//Declaración de funciones principales
	//************************************/
	//declara el estado inicial del formulario cómo vacío
	const initialState = {
		email: "",
		name: "",
		last_name: "",
		user_name: "",
		password2: "",
		country: "",
		region_state: ""
	};
	const [signup, setSignup] = useState(initialState);
	const [buttonActive, setButtonActive] = useState(false);
	//función que guarda los datos en el estado de registro a medida que son completados,
	//cambian el estado inicial vacío a los valores
	const changeSignUp = e => {
		setSignup({
			...signup,
			[e.target.name]: e.target.value
		});
	};

	//función para validación de contraseña1 vs confirmación de contraseña para verificar coincidencia
	//modifica el estado del botón de registro para habilitarlo de ser coincidente
	const validatePassword = () => {
		if (form1.inputPasswordConfirm.value != form1.inputPassword.value) {
			form1.inputPasswordConfirm.value = ""; //limpia campos
			form1.inputPassword.value = ""; //limpia campos
			form1.inputPassword.focus(); //posiciona de nuevo sobre password
			setButtonActive(false);
		} else {
			setButtonActive(true);
		}
	};
	//construcción previa de función para enviar data--Importante en revisión
	const sendData = e => {
		e.preventDefault();
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-8">
					<div className="row justify-content-center">
						<h1 className="mb-5 text-muted text-center">Registro</h1>
					</div>
					<div className="row mb-2 mt-2">
						{/* Aquí inicia el formulario */}
						<form action="" name="form1" id="form1">
							<div className="form-row justify-content-center">
								<div className="form-group col-8">
									<label forHTML="inputEmail">Correo electrónico</label>
									<input
										type="text"
										className="form-control"
										id="inputEmail"
										placeholder="Ingresa un correo electrónico..."
										name="email"
										pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
										onChange={changeSignUp}
										required
									/>
								</div>
								<div className="form-group col-8">
									<label forHTML="inputAddress">Nombre de usuario</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="Selecciona un nombre de usuario..."
										onChange={changeSignUp}
										required
									/>
								</div>
								<div className="form-group col-8">
									<label forHTML="inputPassword">Contraseña</label>
									<input
										type="text"
										className="form-control"
										id="inputPassword"
										// pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" //revisar criterios
										placeholder="Escribe una contraseña..."
										name="password1"
										required
									/>
								</div>
								<div className="form-group col-8">
									<label forHTML="inputPasswordConfirm">Confirmar Contraseña</label>
									<input
										type="text"
										className="form-control"
										id="inputPasswordConfirm"
										placeholder="Repite la contraseña anterior..."
										name="password2"
										onChange={changeSignUp}
										onKeyPress={validatePassword} //revisar evento adecuado
										required
									/>
								</div>
								{/* Pendiente construir lista de selección de País con conexión a la API
								https://restcountries.eu/#api-endpoints-all */}
								<div className="col-8 form-group">
									<div className="row my-5 align-items-center">
										<div className="col-auto">
											<div className="form-group mb-0">
												<label forHTML="cbo-country" className="mb-0 mr-1">
													País{" "}
												</label>
												<select name="cbo-country" id="cbo-country" required>
													<option value="">Seleccione</option>
													{/* <!-- List Option --> */}
												</select>
											</div>
										</div>
										<div className="col-auto ml-auto">
											<button
												id="btnRegister"
												type="submit"
												className="btn btn-primary btn-lg"
												disabled={!buttonActive}>
												Registrar
											</button>
										</div>
									</div>
								</div>
							</div>
						</form>
						{/* Aquí termina el formulario */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
