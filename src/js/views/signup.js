import React, { Fragment, useEffect, useState } from "react";
import "../../styles/signup.scss";
import imagen6 from "../../img/imagen6.png";
import flujodecaja from "../../img/flujodecaja.jpg";

export const Signup = () => {
	//Declaración de funciones principales
	//--------------------------------------------------------/

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA GUARDAR DATOS DEL USUARIO
	//--------------------------------------------------------/
	//Objeto form data almacenará información
	const formData = {
		email: "",
		name: "",
		last_name: "",
		user_name: "",
		password2: "",
		country: "",
		region_state: ""
	};
	const [signup, setSignup] = useState(formData); //Hook estado para guardar info de inputs
	//función que guarda los datos en el estado de registro a medida que son completados,
	//cambian el estado inicial vacío a los valores
	function changeSignUp(e) {
		setSignup({
			...signup,
			[e.target.name]: e.target.value
		});
	}

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA VALIDAR CONTRASEÑAS COINCIDENTES
	//--------------------------------------------------------/
	// //Objeto initialPassword almacenará información las contraseñas
	// const initialPassword = {
	// 	password1: "",
	// 	password2: ""
	// };
	// //Hook de password
	// const [passwordOriginal, setPasswordOriginal] = useState(initialPassword);
	// //Función para guardar información de contraseñas
	// function changePasswordO(e) {
	// 	setPasswordOriginal({
	// 		...passwordOriginal,
	// 		[e.target.name]: e.target.value
	// 	});
	// }
	// console.log(passwordOriginal);
	// //Estado del botón de registro
	// const [buttonActive, setButtonActive] = useState(false);
	// //función valida cuando las contraseñas son idénticas y devuelve verdadero
	// const passwordValidate = passwordOriginal => {
	// 	if ((passwordOriginal["password1"] = passwordOriginal["password2"])) {
	// 		setButtonActive(true); //cambia estado del botón a booleano True
	// 	} else {
	// 		form1.inputPasswordConfirm.value = ""; //limpia campos
	// 		form1.inputPassword.value = ""; //limpia campos
	// 		form1.inputPassword.focus(); //posiciona de nuevo sobre password
	// 		setButtonActive(false); //cambia estado del botón a booleano False
	// 	}
	// };
	// passwordValidate();

	//--------------------------------------------------------/
	//OBJETO-HOOK-FUNCIÓN PARA BUSCAR PAÍS EN API
	//--------------------------------------------------------/
	//enlace de API

	//Hook para guardar la búsqueda
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	//Función para guardar información de búsqueda
	const changeSearch = e => {
		setSearch(e.target.value);
	};
	//Fetch async-await para consultar países de la API
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		const getCountry = async urlAPICountry => {
			try {
				let response = await fetch(urlAPICountry);
				let responseObject = await response.json();
				setCountries(responseObject);
			} catch (error) {
				console.log(error);
			}
		};
		let urlAPICountry = "https://restcountries.eu/rest/v2/all";
		getCountry(urlAPICountry);
	}, []);
	//Función para búsqueda del cliente
	useEffect(
		() => {
			const results = countries.filter(country => country.name.toLowerCase().includes(search));
			setSearchResults(results);
		},
		[search]
	);

	//----------HTML PARA REGISTRO---------------/
	return (
		<div className="form-singup d-flex align-items-center">
			<div className="container bg-light">
				<div className="row justify-content-center">
					<div className="col-md-6 col-sm-12 p-5 text-center">
						<h1 className="mb-5 text-muted text-center">Registro</h1>
						<div className="row mb-4 mt-2">
							{/* Aquí inicia el formulario */}
							<form action="" name="form1" id="form1">
								<div className="form-row justify-content-center">
									<div className="form-group col-8">
										<input
											type="text"
											className="form-control"
											id="inputEmail"
											placeholder="Correo electrónico..."
											name="email"
											pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
											onChange={changeSignUp}
											required
										/>
									</div>
									<div className="form-group col-8">
										<input
											type="text"
											className="form-control"
											id="inputAddress"
											placeholder="Nombre de usuario..."
											onChange={changeSignUp}
											required
										/>
									</div>
									<div className="form-group col-8">
										<input
											type="text"
											className="form-control"
											id="inputPassword"
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" //revisar criterios
											//solicita al menos 1 mayúscula, 1 minúscula, 1 caractér especial, 1 número
											placeholder="Contraseña..."
											name="password1"
											required
											// onChange={changePasswordO}
										/>
									</div>
									<div className="form-group col-8">
										<input
											type="text"
											className="form-control"
											id="inputPasswordConfirm"
											placeholder="Confirmar contraseña..."
											name="password2"
											// onChange={changePasswordO}
											//onKeyPress={passwordValidate} //revisar evento adecuado
											required
										/>
									</div>
									<div className="form-group col-8">
										<form className="form-group" id="formulario">
											<i className="fas fa-search" />
											<input
												type="text"
												placeholder="País..."
												id="inputPais"
												value={search}
												onChange={changeSearch}
											/>
											<ul>
												{searchResults.map((searchResult, index) => {
													return (
														<li key={index} item={searchResult.name}>
															{searchResult.name}
														</li>
													);
												})}
											</ul>
										</form>
									</div>
									<button className="btn btn-primary col-6 my-2 my-sm-0" type="submit">
										{/* // disabled={buttonActive}> */}
										Registrar
									</button>
								</div>
							</form>
							{/* Aquí termina el formulario */}
						</div>
					</div>
					<div className="col-md-6 col-sm-12 d-none d-md-block bg-white justify-content-center align-content-center">
						<img src={imagen6} className="img-fluid" style={{ opacity: 0.7 }} />
						<div className="row justify-content-center">
							<img className="img col-5" src={flujodecaja} alt="Card image cap" />
						</div>
						<p className="card-text text-center">
							¡Registrate ahora! y optimiza tus finanzas, con pocos pasos disfruta de las ventajas al usar
							Optitask
						</p>
						<div />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
