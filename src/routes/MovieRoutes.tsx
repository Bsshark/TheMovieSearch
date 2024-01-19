import { Routes, Route, Navigate } from "react-router-dom";
import { MovieDataScreen } from "../Pages/MovieDataScreen";
import { MovieDisplay } from "../components/MovieDisplay";
import { Navbar } from "../components/Navbar";
import { BookmarkDisplayScreen } from "../Pages/BookmarkDisplayScreen";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/dispatch";
import { useMovieStore } from "../hooks/useMovieStore";
export const MovieRoutes = () => {

	const dispatch = useAppDispatch();

	const { startLoadingMoviesBookmarks, bookmarks } =useMovieStore();

	useEffect(() => {
		if(bookmarks.length < 1) return;
		dispatch(startLoadingMoviesBookmarks());
	}, [bookmarks])
	

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<MovieDisplay />} />
				<Route path="/movie" element={<MovieDataScreen />} />
				<Route path="/list" element={<BookmarkDisplayScreen />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};
