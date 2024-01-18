import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./hooks/useAuthStore";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import { WelcomeScreen } from "./Pages/WelcomeScreen";
import { Navbar } from "./components/Navbar";
import { useAppDispatch } from "./hooks/dispatch";
import { useMovieStore } from "./hooks/useMovieStore";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MovieDataScreen } from "./Pages/MovieDataScreen";

export const TheSearchMovieApp = () => {
	const dispatch = useAppDispatch();

	const debounceRef = useRef<NodeJS.Timeout>();
	const { status } = useAuthStore();
	const { startSearchingMovie } = useMovieStore();
	const navigate = useNavigate();

	useEffect(() => {}, [status]);
	const [movieSearch, setMovieSearch] = useState("");
	useEffect(() => {
		onSearch(movieSearch);
	}, [movieSearch]);
	const onSearch = (query: string) => {
		if (debounceRef.current) clearTimeout(debounceRef.current);

		debounceRef.current = setTimeout(() => {
			//todo: buscar
			dispatch(startSearchingMovie(query));
			navigate("/");
		}, 1000);
	};
	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMovieSearch(e.target.value);
	};

	return (
		<div className="flex justify-center pt-36 pb-10 h-fit min-h-dvh w-full bg-gray-700 font-mono">
			<div>
				<Toaster position="bottom-right" />
			</div>
			<Navbar onMovieSearch={onSearchChange} />
			<div className="h-full" >
				<Routes>
					<Route path="/movie" element={<MovieDataScreen />}></Route>
					<Route path="/*" element={<WelcomeScreen />} />
				</Routes>
			</div>
		</div>
	);
};
