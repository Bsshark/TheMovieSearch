import { MovieDisplay } from "../components/MovieDisplay";

export const WelcomeScreen = () => {

	return (
		<>
			<div className="flex justify-center align-middle items-center pt-36 pb-10 h-full min-h-dvh bg-gray-700 font-mono">
				<MovieDisplay />
			</div>
		</>
	);
};
