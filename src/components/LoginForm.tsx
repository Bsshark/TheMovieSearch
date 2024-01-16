import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useAuthStore } from "../hooks/useAuthStore";
export const LoginForm = () => {

	const { startLoginWithGoogle} = useAuthStore();

	return (
		<div className="sm:w-1/3 w-2/3 sm:h-3/6 h-2/5 rounded-md flex-shrink bg-gradient-to-r from-red-500 to-yellow-500 bg-gray-900 p-1">
			<div className="xl:px-10 px-3 flex flex-col xl:flex-wrap h-full w-full bg-gray-800 text-white justify-center">
				<div className="">
					<h2 className="w-full xl:text-xl font-semibold xl:leading-10 sm:leading-4 text-center">
						Iniciar Sesión
					</h2>
				</div>
				<div className="w-full xl:py-3 py-1">
					<div className="w-1/2">
						<label htmlFor="email">Correo</label>
					</div>
					<div className="w-full">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-yellow-300"
							id="test"
							type="text"
							placeholder="Correo"
						/>
					</div>
				</div>
				<div className="w-full xl:py-3 py-2">
					<div className="w-1/2">
						<label htmlFor="test">Clave</label>
					</div>
					<div className="w-full ">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-yellow-300"
							id="username"
							type="password"
							placeholder="Username"
						/>
					</div>
				</div>
				<div className="w-full flex  xl:py-3 py-2">
					<div className="w-1/2 flex items-center">
						<button
							type="button"
							className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 transition ease-in-out hover:scale-105 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						>
							Login
						</button>
					</div>
					<div className="w-1/2 pl-2 flex justify-center flex-col">
						<FontAwesomeIcon icon={faGoogle} size="2x" className="transition ease-in-out delay-150 hover:cursor-pointer hover:scale-125  duration-150" onClick={startLoginWithGoogle}/>
					</div>
				</div>
			</div>
		</div>
	);
};
