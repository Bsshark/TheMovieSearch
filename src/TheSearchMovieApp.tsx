import { AppRouter } from "./router/AppRouter";

export const TheSearchMovieApp = () => {
	return (<div className="flex justify-center align-middle items-center pt-36 pb-10 h-full min-h-dvh bg-gray-700 font-mono"><AppRouter /></div>);
}

{
	/* <div className="flex justify-center align-middle items-center pt-36 pb-10 h-full min-h-dvh bg-gray-700 font-mono">
			
			{status === statusTypes.authenticatedStatus ? <Navbar /> : <></>}
			<div className="flex h-full w-full justify-center">
				<Routes>
					{status === statusTypes.notAuthenticatedStatus ? (
						<Route path="/" element={<WelcomeScreen />} />
					) : (
						<Route path="/movie" element={<MovieDataScreen />}></Route>
					)}
				</Routes>
			</div>
		</div> */
}
