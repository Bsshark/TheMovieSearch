export interface movieState {
	isLoading: boolean;
	selectedMovie: movieResponseData;
	moviesDisplay: movieResponseData[];
	streamingServices: streamingServicesResponseData;
}

export interface movieResponseData {
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

export interface streamingServicesResponseData {
	id: number;
	results: streamingServiceResponseResults;
}
export interface streamingServiceResponseResults {
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
