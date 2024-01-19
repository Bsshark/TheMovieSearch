import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	BookmarkData,
	MovieResponseData,
	MovieState,
	StreamingServicesResponseData,
} from "../interfaces/movieInterfaces";
export const movieSlice = createSlice({
	name: "movie",
	initialState: {
		isLoading: true,
		moviesDisplay: [],
		selectedMovie: {} as MovieResponseData,
		streamingServices: {} as StreamingServicesResponseData,
		bookmarks: [],
		bookmarkMovies: []
	} as MovieState,
	reducers: {
		onLoad: (state /* action */) => {
			state.isLoading = true;
		},
		onSearch: (
			state: MovieState,
			{ payload }: PayloadAction<MovieResponseData[]>
		) => {
			state.isLoading = false;
			state.moviesDisplay = payload;
		},
		onLoadMoviePage: (
			state: MovieState,
			{ payload }: PayloadAction<MovieResponseData>
		) => {
			state.isLoading = false;
			state.selectedMovie = payload;
		},
		onLoadStreamingServices: (
			state: MovieState,
			{ payload }: PayloadAction<StreamingServicesResponseData>
		) => {
			state.streamingServices = payload;
		},
		onClearMovieData: (state: MovieState) => {
			state.moviesDisplay = [];
			state.selectedMovie = {} as MovieResponseData;
			state.streamingServices = {} as StreamingServicesResponseData;
		},
		onLoadBookmarks: (
			state: MovieState,
			{ payload }: PayloadAction<BookmarkData[]>
		) => {
			state.bookmarks = payload;
		},
		onSetNewBookmark: (
			state: MovieState,
			{ payload }: PayloadAction<BookmarkData>
		) => {
			state.bookmarks = [...state.bookmarks, payload];
		},
		onRemoveBookmark: (state: MovieState, { payload }: PayloadAction<BookmarkData[]>) => {
			state.bookmarks = payload;
		},
		onLoadBookmarkMovies: (state: MovieState, { payload }: PayloadAction<MovieResponseData[]>) => {
			state.isLoading = false;
			state.bookmarkMovies = payload;
		}
	},
});
export const {
	onLoad,
	onSearch,
	onLoadMoviePage,
	onClearMovieData,
	onLoadStreamingServices,
	onSetNewBookmark,
	onRemoveBookmark,
	onLoadBookmarks,
	onLoadBookmarkMovies
} = movieSlice.actions;
