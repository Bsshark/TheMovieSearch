import { useMovieStore } from "../hooks/useMovieStore";
import { LoadingComponent } from "../components/LoadingComponent";
import { MovieCard } from "../components/MovieCard";

export const BookmarkDisplayScreen = () => {
	const { isLoading, bookmarkMovies } = useMovieStore();

	if (isLoading) return <LoadingComponent />;

	return (
		<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 h-full grid-rows-2 gap-4 px-5">
			{bookmarkMovies.length > 0 ? (
				[...bookmarkMovies].map((movie) => (
					<div key={movie.id}>
						<MovieCard movie={movie} />
					</div>
				))
			) : (
				<></>
			)}
		</div>
	);
};
