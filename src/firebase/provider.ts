import {
	GoogleAuthProvider,
	User,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { ErrorRequest, LoginUser } from '../interfaces/AuthInterfaces';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async(): Promise<User | any> => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		const credentials = GoogleAuthProvider.credentialFromResult(result);

		console.log(credentials)
		return result.user;

	} catch (error: any) {
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};

export const loginWithEmailPassword = async ({
	email,
	password,
}: LoginUser) => {
	try {
		const result = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);

		return {
			ok: true,
			user: result.user,
		};
	} catch (error: any) {
		return { ok: false, errorMessage: error.message };
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
