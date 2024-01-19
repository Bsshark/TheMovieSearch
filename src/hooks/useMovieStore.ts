import movieApi from "../api/movieApi";
import { useAppDispatch, useAppSelector } from "./dispatch";
import {
	onSearch,
	onLoad,
	onLoadMoviePage,
	onLoadStreamingServices,
	onSetNewBookmark,
	onLoadBookmarks,
	onRemoveBookmark,
	onLoadBookmarkMovies,
} from "../store/movieSlice";
import { MovieResponseData, MovieState } from "../interfaces/movieInterfaces";
import { doc, setDoc, deleteDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../firebase/config";
import { loadBookmarks } from "../helpers/loadBookmarks";

export const useMovieStore = () => {
	const dispatch = useAppDispatch();

	const {
		moviesDisplay,
		selectedMovie,
		isLoading,
		streamingServices,
		bookmarks,
		bookmarkMovies
	}: MovieState = useAppSelector((state) => state.movie);

	const startSearchingMovie = (movieName: string) => {
		return async () => {
			dispatch(onLoad());
			const includeAdult = true;
			const lang = "es-ES";
			const pagination = 1;
			const resp = await movieApi.get(
				`search/movie?query=${movieName}&include_adult=${includeAdult}&language=${lang}&page=${pagination}`
			);

			dispatch(onSearch(resp.data.results));
		};
	};

	const startSelectedMovie = (movie: MovieResponseData) => {
		return async () => {
			dispatch(onLoad());
			const providers = await movieApi.get(`movie/${movie.id}/watch/providers`);
			dispatch(onLoadStreamingServices(providers.data));
			dispatch(onLoadMoviePage(movie));
		};
	};

	const startLoadingBookmarks = () => {
		return async () => {
			const uid = FirebaseAuth.currentUser?.uid;
			if (!uid) throw new Error("El usuario no está establecido");

			const bookmarks = await loadBookmarks(uid);
			console.log(bookmarks);
			dispatch(onLoadBookmarks(bookmarks));
		};
	};

	const startSavingBookmark = (movieId: number, movieTitle: string) => {
		return async () => {
			const uid = FirebaseAuth.currentUser?.uid;
			if (!uid) throw new Error("El usuario no está establecido");
			const docRef = doc(FirebaseDB, `${uid}/bookmarks/moviesId/${movieId}`);

			const editedBookmarks = [...bookmarks];
			if (bookmarks.find((bookmark) => bookmark.id === movieId)) {
				//remove

				editedBookmarks.splice(
					bookmarks.findIndex((i) => i.id === movieId),
					1
				);
				dispatch(onRemoveBookmark(editedBookmarks));
				await deleteDoc(docRef);
			} else {
				//new
				dispatch(onSetNewBookmark({ id: movieId, title: movieTitle }));
				await setDoc(docRef, { movieId, movieTitle }, { merge: true });
			}
		};
	};

	const startLoadingMoviesBookmarks = () => {
		return async () => {
			
			dispatch(onLoad());

			const bookmarkPromises: Promise<any>[] = [];
			bookmarks.map((bookmark) => {
				bookmarkPromises.push(movieApi.get(`movie/${bookmark.id}?language=es-ES`));
			})
			Promise.all(bookmarkPromises).then((moviesResult) => {
				const moviesBookmarked: MovieResponseData[] = [];
				moviesResult.map((result) => {
					moviesBookmarked.push(result.data);
				})
				dispatch(onLoadBookmarkMovies(moviesBookmarked));
			})


			
		}
	}

	return {
		//props
		isLoading,
		moviesDisplay,
		selectedMovie,
		streamingServices,
		startSavingBookmark,
		bookmarks,
		bookmarkMovies,
		//metodos
		startSearchingMovie,
		startSelectedMovie,
		startLoadingBookmarks,
		startLoadingMoviesBookmarks
	};
};
