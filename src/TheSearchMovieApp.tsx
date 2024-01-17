import { Toaster } from "react-hot-toast";
import { LoadingComponent } from "./components/LoadingComponent";
import { useAuthStore } from "./hooks/useAuthStore";
import { statusTypes } from "./interfaces/AuthInterfaces";
import { useEffect } from "react";
import { WelcomeScreen } from "./Pages/WelcomeScreen";

export const TheSearchMovieApp = () => {

	const { status } = useAuthStore();
	
	useEffect(() => {
		
	}, [status])
	

	return (
		<div className="flex items-center justify-center h-full bg-gray-700 font-mono">
			<div><Toaster position="bottom-right"/></div>
			{
				status===statusTypes.checkingStatus
				?<LoadingComponent/>
				:<WelcomeScreen/>
			}
		
		</div>
	);
};
