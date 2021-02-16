import signup from "../views/signup.js";
import login from "../views/login";

const data_login = login;
const data_signup = signup;
const BASE_URL = "http://localhost:8080";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			countries: []
		},
		actions: {
			// Registrar un usuario
			addUser: async () => {
				const newLocal = `${BASE_URL}/users`;
				let url = newLocal;
				let response = await fetch(url, {
					method: "POST",
					body: JSON.stringify(data_signup), //revisar cómo se llama a estado singup de componente signup.js
					headers: { "Content-Type": "application/json" }
				});
				if (response.ok) {
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},

			//Consulta API Countries REST
			getCountries: async () => {
				try {
					let urlAPICountry = "https://restcountries.eu/rest/v2/all";
					let response = await fetch(urlAPICountry);
					let responseObject = await response.json();
					setStore({ countries: responseObject });
					console.log(responseObject);
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
