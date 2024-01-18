import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieResponseData, movieState, streamingServicesResponseData } from '../interfaces/movieInterfaces';
export const movieSlice = createSlice({
	name: "movie",
	initialState: {
		isLoading: true,
		moviesDisplay: [],
		selectedMovie: {} as movieResponseData,
		streamingServices: {} as streamingServicesResponseData
	} as movieState,
	reducers: {
		onLoad: (state /* action */) => {
			state.isLoading = true;
		},
		onSearch: (state: movieState, { payload }: PayloadAction<movieResponseData[]>) => {
            state.isLoading = false;
            state.moviesDisplay = payload;
        },
		onLoadMoviePage: (state: movieState, { payload }: PayloadAction<movieResponseData>) => {
			state.isLoading = false;
			state.selectedMovie = payload;
		},
		onLoadStreamingServices: (state: movieState, { payload } : PayloadAction<streamingServicesResponseData>) => {
			state.streamingServices = payload;
		}
	},
});
export const { onLoad, onSearch, onLoadMoviePage, onLoadStreamingServices } = movieSlice.actions;
