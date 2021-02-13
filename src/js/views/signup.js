import React, { Fragment, useEffect, useState } from "react";
import "../../styles/signup.scss";

export const Signup = () => {
	//Declaración de funciones principales
	//************************************/
	//declara el estado inicial del formulario cómo vacío
	const urlAPICountry = "https://restcountries.eu/rest/v2/all"; //enlace de API Cpuntry
	const initialState = {
		email: "",
		name: "",
		last_name: "",
		user_name: "",
		password2: "",
		country: "",
		region_state: ""
	};
	const [country, setCountry] = useState([]);
	const [signup, setSignup] = useState(initialState);
	const [buttonActive, setButtonActive] = useState(false);
	//useEffect para países
	useEffect(() => {
		const getCountry = async url => {
			try {
				let response = await fetch(urlAPICountry);
				let responseObject = await response.json();
				setCountry(responseObject);
				console.log(country);
			} catch (error) {
				console.log(error);
			}
		};
		getCountry(urlAPICountry);
	}, []);
	//función que guarda los datos en el estado de registro a medida que son completados,
	//cambian el estado inicial vacío a los valores
	function changeSignUp(e) {
		setSignup({
			...signup,
			[e.target.name]: e.target.value
		});
	}

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
						<h1 className="text-center">Registro</h1>
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
								<div className="form-group col-6">
									<label forHTML="country">País </label>
									<select name="country" id="country" required>
										{country.map((country, index) => {
											//envío información como propiedad value (desde objeto country)
											return (
												<option key={index} value={country}>
													{country}
												</option>
											);
										})}
									</select>
								</div>
								<button
									id="btnRegister"
									type="submit"
									className="btn btn-outline-secondary"
									disabled={!buttonActive}>
									Registrar
								</button>
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
