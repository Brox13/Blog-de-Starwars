const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				let response = await fetch(url);
				const data = await response.json();
				setStore({ people: data.results });
			},
			loadPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				let response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},
			addFavorite: name => {
				let count = 0;
				const store = getStore();
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name
							}
						]
					});
				}
			},
			removeFavorite: id => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;