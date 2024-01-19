import { useAppDispatch } from "../hooks/dispatch";
import { useMovieStore } from "../hooks/useMovieStore";
import { MovieResponseData } from "../interfaces/movieInterfaces";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface MovieCardProps {
	movie: MovieResponseData;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
	const { startSelectedMovie, startSavingBookmark, bookmarks } = useMovieStore();

	const dispatch = useAppDispatch();

	const [isBookmark, setIsBookmark] = useState(false);

	useEffect(() => {
	  if(!bookmarks.find((bookmark) => bookmark.id === movie.id)) return setIsBookmark(false);
	  setIsBookmark(true);
	}, [bookmarks])
	

	const handleMovieSelect = () => {
		dispatch(startSelectedMovie(movie));
	};

	const handleSaveBookmark = () => {
		dispatch(startSavingBookmark(movie.id, movie.title));
	}



	return (
		<div className="overflow max-w-sm h-full flex flex-col bg-slate-400 border border-red-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
			<div className="absolute -top-1 -right-2 h-fit z-50" onClick={handleSaveBookmark}>
				<FontAwesomeIcon
					icon={faBookmark}
					size="3x"
					style={{ color: isBookmark?'yellow':'gray', textShadow: "0 0 3px #000" }}
					className="hover:scale-125 hover:cursor-pointer size-10"
					
				/>
			</div>
			<div className="h-2/3 flex-initial w-full overflow-hidden">
				<Link to="/movie" onClick={handleMovieSelect}>
					<img
						className="rounded-t-lg hover:scale-110 h-full w-full object-cover object-top transition ease-in-out"
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						alt=""
					/>
				</Link>
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
