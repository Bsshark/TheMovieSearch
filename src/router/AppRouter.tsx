import {  Route, Routes } from "react-router-dom";
import { TheSearchMovieApp } from "../TheSearchMovieApp";
import { MovieDataScreen } from "../Pages/MovieDataScreen";

export const AppRouter = () => {

	return (
		<Routes>
            <Route path="/movie" element={<MovieDataScreen/>}/>
			<Route path="/*" element={<TheSearchMovieApp />} />
		</Routes>
	);
};
