import { useMovieStore } from "../hooks/useMovieStore";
import { LoadingComponent } from "./LoadingComponent";
import { MovieCard } from "./MovieCard";

export const MovieDisplay = () => {
	const { moviesDisplay, isLoading } = useMovieStore();

	return (
		<>
				{isLoading ? (
					<div className="justify-center align-middle">
						<LoadingComponent/>
					</div>
				) : (
					<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 h-full grid-rows-2 gap-4 mx-2">
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
		</>
	);
};
