import toast from "react-hot-toast";
import {
	createUser,
	loginWithEmailPassword,
	logoutFirebase,
	signInWithGoogle,
} from "../firebase/provider";
import {
	AuthState,
	LoginUser,
	RegisterUser,
	statusTypes,
} from "../interfaces/AuthInterfaces";
import { onCheckingCredentials, onLogin, onLogout } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "./dispatch";
import { useEffect } from "react";
import {
	onAuthStateChanged,
} from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

export const useAuthStore = () => {
	const dispatch = useAppDispatch();

	const {
		status,
		user,
		errorMessage = undefined,
	}: AuthState = useAppSelector((state) => state.auth);

	const startLogin = ({ email, password }: LoginUser) => {
		return async () => {
			dispatch(onCheckingCredentials());
			const user = await loginWithEmailPassword({ email, password });
			if (!user.ok) return dispatch(onLogout());
			dispatch(onLogin({ ...user }));
		};
	};

	const startRegister = ({ displayName, email, password }: RegisterUser) => {
		return async () => {
			dispatch(onCheckingCredentials());
			try {
				const user = await createUser({ email, password, displayName });
				console.log(user);
				if (!user.ok) return dispatch(onLogout());
				dispatch(onLogin({ ...user }));
			} catch (error) {
				console.log(error);
			}
		};
	};

	const startLoginWithGoogle = async () => {
		dispatch(onCheckingCredentials());
		try {
			signInWithGoogle().then((user) => {
				dispatch(onLogin(user));
				toast.success("Logeado correctamente");
			});
		} catch (error) {}
	};

	const startLogOut = async () => {
		dispatch(onCheckingCredentials());
		try {
			logoutFirebase().then(() => {
				dispatch(onLogout());
			});
		} catch (error) {}
	};

	useEffect(() => {
		if (status !== statusTypes.checkingStatus) return;
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) return dispatch(onLogout());
			dispatch(onLogin({ ...user }));
		});
	}, [status]);

	return {
		//Propiedades
		status,
		user,
		errorMessage,

		//Metodos
		startLogin,
		startRegister,
		startLogOut,
		startLoginWithGoogle,
	};
};
