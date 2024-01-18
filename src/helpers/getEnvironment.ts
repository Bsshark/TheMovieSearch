export const getEnvironment = () => {
	//import.meta.env;
	return {
		//...import.meta.env,
		VITE_APIKEY: import.meta.env.VITE_APIKEY,
		VITE_AUTHDOMAIN: import.meta.env.VITE_AUTHDOMAIN,
		VITE_PROJECTID: import.meta.env.VITE_PROJECTID,
		VITE_STORAGEBUCKET: import.meta.env.VITE_STORAGEBUCKET,
		VITE_MESSAGINGSENDERID: import.meta.env.VITE_MESSAGINGSENDERID,
		VITE_APPID: import.meta.env.VITE_APPID,
		VITE_MOVIEAPI_URL: import.meta.env.VITE_MOVIEAPI_URL,
		VITE_MODE: import.meta.env.VITE_MODE,
		VITE_MOVIEAPI_TOKEN: import.meta.env.VITE_MOVIEAPI_TOKEN
	};
};
