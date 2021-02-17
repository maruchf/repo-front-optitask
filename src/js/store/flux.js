const BASE_URL = "https://3000-teal-prawn-dphc49pw.ws-eu03.gitpod.io";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			countries: [],
			token: ""
		},
		actions: {
			loginUser: async data_login => {
				let url = BASE_URL + "/login";
				let response = await fetch(url, {
					method: "POST",
					body: JSON.stringify(data_login),
					headers: { "Content-Type": "application/json" }
				});
				if (response.ok) {
					setStore({ token: response.jwt });
					console.log(response.jwt);
					return true;
				} else {
					console.log(response.statusText);
					console.log(response.status);
					return false;
				}
			},
			// Registrar un usuario
			addUser: async data_signup => {
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
