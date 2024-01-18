import { movieResponseData } from "../interfaces/movieInterfaces";

export interface MovieCardProps {
	movie: movieResponseData;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
	return (
		<div className="overflow-hidden max-w-sm h-full flex flex-col bg-slate-400 border border-red-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<div className="h-2/3 flex-initial w-full">
				<a href="#">
					<img
						className="rounded-t-lg hover:scale-110 h-full w-full object-cover object-top transition ease-in-out"
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						alt=""
					/>
				</a>
			</div>
			<div className="p-2 flex flex-col overflow-clip">
				<div className="flex-initial overflow-clip">
					<a href="#">
						<h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
							{movie.title}
						</h5>
					</a>
				</div>

				<p className="flex-initial text-xs overflow-clip mb-3 font-normal text-gray-700 dark:text-gray-400">
					Año: {new Date(movie.release_date).getFullYear()}
				</p>
			</div>
		</div>
	);
};
