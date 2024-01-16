import { User } from './../interfaces/AuthInterfaces';
import { loginWithEmailPassword, signInWithGoogle } from "../firebase/provider";
import { AuthState, LoginUser } from "../interfaces/AuthInterfaces";
import { onCheckingCredentials, onLogin } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "./dispatch";

export const useAuthStore = () => {
	const dispatch = useAppDispatch();

	const {
		status,
		user,
		errorMessage = undefined,
	}: AuthState = useAppSelector((state) => state.auth);

	const startLogin = async ({ email, password }: LoginUser) => {
		dispatch(onCheckingCredentials());
		try {
			loginWithEmailPassword({ email, password }).then((result) => {
				if (result.ok && result.user?.email) {
					const { user } = result;
					dispatch(
						onLogin({
							email: user.email!,
							displayName: user.displayName!,
							photoURL: user.photoURL ? user.photoURL : "",
							uid: user.uid,
						})
					);
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	const startLoginWithGoogle = async() => {
		dispatch(onCheckingCredentials());
		try {
			signInWithGoogle().then((result) => {
                const { displayName, uid, email, photoURL } = result;
				dispatch(onLogin({displayName, uid, email, photoURL}));
			});
		} catch (error) {}
	};

	return {
		//Propiedades
		status,
		user,
		errorMessage,

		//Metodos
		startLogin,
		startLoginWithGoogle,
	};
};
