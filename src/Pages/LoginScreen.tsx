import { useState } from "react";
import { RegisterForm } from "../components/RegisterForm";
import { LoginForm } from "../components/LoginForm";

export const LoginScreen = () => {
	const [showRegister, setShowRegister] = useState(false);
	const toggleShowForm = () => {
		console.log(showRegister);
		setShowRegister(!showRegister);
	};
	return (
		<div className="w-full items-center flex justify-center">
			{showRegister ? (
				<RegisterForm toggleShowForm={() => toggleShowForm()} />
			) : (
				<LoginForm toggleShowForm={() => toggleShowForm()} />
			)}
		</div>
	);
};
