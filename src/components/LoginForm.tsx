export const LoginForm = () => {
	return (
		<div className="w-1/2 h-1/2 rounded-md flex-shrink bg-gradient-to-r from-red-500 to-yellow-500 bg-gray-900 p-1">
			<div className="xl:px-10 px-3 flex-shrink h-full w-full bg-gray-800 text-white items-center align-middle">
				<div className="flex pt-5">
					<h2 className="w-full text-lg font-semibold leading-10 text-center">
						Iniciar Sesión
					</h2>
				</div>
				<div className="flex xl:py-6 py-1">
					<div className="w-1/3">
						<label htmlFor="test">Correo</label>
					</div>
					<div className="w-full">
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-yellow-300" id="test" type="text"/>
					</div>
				</div>
				<div className="flex xl:py-6 py-2">
					<div className="w-1/3">
						<label htmlFor="test">Clave</label>
					</div>
					<div className="w-full ">
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-yellow-300" id="username" type="text" placeholder="Username"/>
    
					</div>
				</div>
				<div className="flex xl:py-6 py-2">
					<div className="w-1/3">
						<label htmlFor="test">Clave</label>
					</div>
					<div className="w-full ">
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-yellow-300" id="username" type="text" placeholder="Username"/>
    
					</div>
				</div>
			</div>
		</div>
	);
};
