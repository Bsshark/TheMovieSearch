import { useMovieStore } from "../hooks/useMovieStore";

export const MovieDataScreen = () => {
	const { selectedMovie } = useMovieStore();

	return (
		<div className="w-fit pt-32 h-screen">
			<div className="grid h-full w-screen grid-cols-2 gap-4 grid-rows-1">
				<div className="row-span-2 justify-center align-middle h-4/5 flex">
					<img
						src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
						alt=""
						className="h-full border-2 border-gray-800 shadow-2xl shadow-red-300"
					/>
				</div>
				<div className="row-span-1 h-2/5 flex w-fit pr-10 flex-wrap">
					<h1 className="font-semibold font-mono flex text-2xl h-fit text-yellow-100 w-full">{selectedMovie.title}</h1>
          <hr className="h-px my-2 bg-white border-0 dark:bg-white w-full"></hr>
          <div className="w-full h-full font-thin text-white text-justify overflow-hidden text-ellipsis text-sm">{selectedMovie.overview}</div>
				</div>
			</div>
		</div>
	);
};
