import { getEnvironment } from "./../../helpers/getEnvironment";
import axios from "axios";

//const PokeApiUrl = 'https://pokeapi.co/api/v2/';
const { VITE_MOVIEAPI_URL, VITE_MOVIEAPI_TOKEN } = getEnvironment();

const movieApi = axios.create({
	baseURL: VITE_MOVIEAPI_URL,
	headers: { Authorization: `Bearer ${VITE_MOVIEAPI_TOKEN}` },
});

movieApi.interceptors.request.use(
	(config) => {
		/* const token = localStorage.getItem("token");
		if (config.headers && token) {
			config.headers["x-token"] = token; 
		} */

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default movieApi;
