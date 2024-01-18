import { useMovieStore } from "../hooks/useMovieStore";
import { LoadingComponent } from "./LoadingComponent";
import { MovieCard } from "./MovieCard";

export const MovieDisplay = () => {
	const { moviesDisplay, isLoading } = useMovieStore();

	return (
		<>
			<div className="w-fit pt-32 h-screen">
				{isLoading ? (
					<div className="flex flex-grow justify-center align-middle">
						<LoadingComponent/>
					</div>
				) : (
					<div className="grid grid-cols-5 h-full grid-rows-2 gap-4 mx-2">
						{moviesDisplay.length > 0 ? (
							[...moviesDisplay]
								.sort((a, b) => b.popularity - a.popularity)
								.slice(0, 10)
								.map((movie) => (
									<div key={movie.id}>
										<MovieCard movie={movie} />
									</div>
								))
						) : (
							<></>
						)}
					</div>
				)}
			</div>
		</>
	);
};
