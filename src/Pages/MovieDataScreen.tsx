import { useEffect, useState } from "react";
import { useMovieStore } from "../hooks/useMovieStore";
import { Navigate } from "react-router-dom";
import { LoadingComponent } from "../components/LoadingComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../hooks/dispatch";

export const MovieDataScreen = () => {

	const {
		selectedMovie,
		isLoading,
		streamingServices,
		bookmarks,
		startSavingBookmark,
	} = useMovieStore();


	const dispatch = useAppDispatch();

	

	const [isBookmark, setIsBookmark] = useState(false);

	

	useEffect(() => {
		if (!selectedMovie) Navigate({ to: "/" });
	}, [selectedMovie]);

	useEffect(() => {
		if (!bookmarks.find((bookmark) => bookmark.id === selectedMovie.id))
			return setIsBookmark(false);
		setIsBookmark(true);
	}, [bookmarks]);

	const handleSaveBookmark = () => {
		dispatch(startSavingBookmark(selectedMovie.id, selectedMovie.title));
	};

	if (isLoading) {
		return <LoadingComponent />;
	}

	return (
		<div className="h-fit w-full flex flex-wrap md:flex-nowrap justify-center md:justify-around ">
			<div className="px-5 w-5/6 md:w-3/12 relative">
				<div className="absolute -top-1 right-1 h-fit z-50" onClick={handleSaveBookmark}>
					<FontAwesomeIcon
						icon={faBookmark}
						size="10x"
						style={{
							color: isBookmark ? "yellow" : "gray",
							textShadow: "0 0 10px #000",
						}}
						className="hover:scale-125 hover:cursor-pointer size-10"
						
					/>
				</div>
				<img
					src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
					className="shadow-red-400 shadow-2xl"
				/>
			</div>
			<div className="px-5 w-5/6 md:w-6/12">
				<div className="w-full flex flex-wrap justify-center">
					<h2 className="w-fit font-sans text-lg text-zinc-100">
						{selectedMovie.title}
					</h2>
					<hr className="w-full h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
				</div>
				<div className="w-full text-gray-400 pb-4 h-fit">
					<p className="overflow-hidden text-ellipsis h-full text-sm md:text-base">
						{selectedMovie.overview}
					</p>
				</div>
				<div className="py-2 w-full h-fit flex flex-wrap justify-around bg-slate-900">
					<div className="w-full text-center text-zinc-300 font-bold">
						Streaming
					</div>
					{streamingServices?.results?.ES?.flatrate?.length > 0 ? (
						streamingServices.results.ES.flatrate.map((provider, index) => (
							<div key={index} className="h-full w-20">
								<img
									src={`https://image.tmdb.org/t/p/original//${provider.logo_path}`}
								/>
							</div>
						))
					) : (
						<div className="h-20"></div>
					)}
				</div>
				<div className="py-2 w-full h-fit flex flex-wrap justify-around bg-amber-700">
					<div className="w-full text-center text-slate-800 font-bold">
						Comprar
					</div>
					{streamingServices?.results?.ES?.buy?.length > 0 ? (
						streamingServices?.results.ES.buy.map((provider, index) => (
							<div key={index} className="h-full w-20">
								<img
									src={`https://image.tmdb.org/t/p/original//${provider.logo_path}`}
								/>
							</div>
						))
					) : (
						<div className="h-20"></div>
					)}
				</div>
				<div className="py-2 w-full h-fit flex flex-wrap justify-around bg-lime-900">
					<div className="w-full text-center text-zinc-300 font-bold">
						Alquiler
					</div>
					{streamingServices?.results?.ES?.rent?.length > 0 ? (
						streamingServices?.results.ES.rent.map((provider, index) => (
							<div key={index} className="h-full w-20">
								<img
									src={`https://image.tmdb.org/t/p/original//${provider.logo_path}`}
								/>
							</div>
						))
					) : (
						<div className="h-20"></div>
					)}
				</div>
			</div>
		</div>
	);
};
