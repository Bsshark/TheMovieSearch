import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { useAuthStore } from "../hooks/useAuthStore";
import { statusTypes } from "../interfaces/AuthInterfaces";
import { RegisterForm } from "../components/RegisterForm";
import { LoadingComponent } from "../components/LoadingComponent"
import { MovieDisplay } from "../components/MovieDisplay";

export const WelcomeScreen = () => {
	const { status } = useAuthStore();
	const [showRegister, setShowRegister] = useState(false);

	const toggleShowForm = () => {
		setShowRegister(!showRegister);
	};

	if (status === statusTypes.checkingStatus) {
		return <LoadingComponent />;
	}

	return (
		<>
			{status === statusTypes.notAuthenticatedStatus ? (
				showRegister ? (
					<RegisterForm toggleShowForm={() => toggleShowForm()} />
				) : (
					<LoginForm toggleShowForm={() => toggleShowForm()} />
				)
			) : (
				<>
					<MovieDisplay />
				</>
			)}
		</>
	);
};
