import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { statusTypes } from "../interfaces/AuthInterfaces";
import { LoadingComponent } from "../components/LoadingComponent";
import { Toaster } from "react-hot-toast";
import { LoginScreen } from "../Pages/LoginScreen";
import { MovieRoutes } from "../routes/MovieRoutes";

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === statusTypes.checkingStatus) return <LoadingComponent />;

	return (
		<>
			<Toaster position="bottom-right" />
			<Routes>
				{status === statusTypes.authenticatedStatus ? (
					<Route path="/*" element={<MovieRoutes />} />
				) : (
					<Route path="/login" element={<LoginScreen />} />
				)}
				<Route path="/*" element={<Navigate to={"/login"} />} />
			</Routes>
		</>
	);
};
