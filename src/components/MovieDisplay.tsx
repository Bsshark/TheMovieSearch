import { useMovieStore } from "../hooks/useMovieStore";
import { MovieCard } from "./MovieCard";

export const MovieDisplay = () => {
	const { moviesDisplay } = useMovieStore();

	return (
		<>
			<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 h-full grid-rows-2 gap-4 px-5">
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
		</>
	);
};
