import { LoadingComponent } from "./components/LoadingComponent";
import { LoginForm } from "./components/LoginForm";
import { useAuthStore } from "./hooks/useAuthStore";
import { statusTypes } from "./interfaces/AuthInterfaces";
export const TheSearchMovieApp = () => {

	const { status } = useAuthStore();

	return (
		<div className="flex items-center justify-center h-full bg-gray-700 font-mono">
			{
				status===statusTypes.notAuthenticatedStatus
				?(<LoginForm/>)
				:<LoadingComponent/>
			}
		</div>
	);
};
