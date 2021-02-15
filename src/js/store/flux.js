const URL_BASE = "http://localhost:3000/"

const getState = ({ getStore, getActions, setStore }) => {
	

	return {
		store: {
			user: [],
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			fetchUser: async (id= null) => {
				let url= BASE_URL + "/users";
				if (id !=null){
					url += "/" +id;
				}
				let response= await fetch(url);
				if (response.ok){
					let body = await response.json();
					if (id == null) {
						setStore({
							user: body
						});
					} else {
						alert("Problema");
					}
				}
			}

			addUser: async (signup) => {
				let url= BASE_URL + "/users";
				let response= await fetch(url,
					{
						method: "POST",
						body: JSON.stringify(signup),//revisar cómo se llama a estado singup de componente signup.js
						headers: {
							"Content-Type": "application/json"
						}
					});
				if (response.ok){
					console.log(response)
				}
			}



			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
