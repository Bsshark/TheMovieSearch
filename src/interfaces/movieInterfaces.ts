export interface MovieState {
	isLoading: boolean;
	selectedMovie: MovieResponseData;
	moviesDisplay: MovieResponseData[];
	streamingServices: StreamingServicesResponseData;
	bookmarks: BookmarkData[],
	bookmarkMovies: MovieResponseData[]
}

export interface MovieResponseData {
	adult: boolean;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	vote_average: number;
	vote_count: number;
}

export interface BookmarkData {
	id: number;
	title: string;
}

export interface StreamingServicesResponseData {
	id: number;
	results: StreamingServiceResponseResults;
}
export interface StreamingServiceResponseResults {
	ES: streamingServiceResponseEs;
}
export interface streamingServiceResponseEs {
	link: string;
	rent: Rent[];
	buy: Buy[]; //20
	flatrate: Flatrate[]; //24
}
export interface Rent {
	logo_path: string;
	provider_id: number;
	provider_name: string;
	display_priority: number;
}

export interface Buy {
	logo_path: string;
	provider_id: number;
	provider_name: string;
	display_priority: number;
}

export interface Flatrate {
	logo_path: string;
	provider_id: number;
	provider_name: string;
	display_priority: number;
}
