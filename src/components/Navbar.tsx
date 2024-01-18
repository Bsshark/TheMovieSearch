import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthStore } from "../hooks/useAuthStore";
import { ChangeEvent } from "react";

export interface movieSearchProps {
	onMovieSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Navbar = ({onMovieSearch}: movieSearchProps) => {

    const { startLogOut } = useAuthStore();

    const handleLogOut = () => {
        startLogOut();
    }

	return (
		<>
			<div className="flex flex-wrap place-items-center absolute top-0 z-10 w-full">
				<section className="relative mx-auto w-full">
					<nav className="flex bg-gray-900 text-white justify-between w-full py-4">
						<div className="px-3 xl:px-12 flex w-fit items-center">
							<a
								className="xl:text-3xl md:text-xl font-bold font-heading"
								href="/"
							>
								The Movie Search
							</a>
						</div>
						<div className="relative flex items-center w-1/2 min-w-28 h-12 mt-3 md:-mr-1.5 rounded-lg focus-within:shadow-lg bg-slate-400 overflow-hidden border-x-2 border-y-red-200 border-y-2 border-x-emerald-400">
							<div className="grid place-items-center h-full w-12 text-gray-300">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>

							<input
								className="peer h-full w-full outline-none text-lg bg-slate-600 text-gray-200 px-2 font-mono font-bold"
								type="text"
								id="search"
								placeholder="Buscar.."
								onChange={onMovieSearch}
							/>
						</div>
						<a className="navbar-burger self-center h-fit w-fit mx-2 flex flex-nowrap" href="#">
								<FontAwesomeIcon
									icon={faUser}
									size="2x"
									className="size-6 sm:size-8 pr-4"
								/>
								<FontAwesomeIcon
									icon={faRightFromBracket}
									size="2x"
									className="size-6 sm:size-8 pr-4"
                                    onClick={() => handleLogOut()}
								/>
						</a>
					</nav>
				</section>
			</div>
		</>
	);
};
