import {
	GoogleAuthProvider,
	User,
	UserCredential,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { LoginUser, RegisterUser } from "../interfaces/AuthInterfaces";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { getAuth } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const loginWithEmailPassword = async ({
	email,
	password,
}: LoginUser): Promise<UserCredential | any> => {
	try {
		const { user } = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		return {
			ok: true,
			...user,
		};
	} catch (error) {
		return { ok: false, errorMessage: error };
	}
};

export const signInWithGoogle = async (): Promise<User | any> => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		const credentials = GoogleAuthProvider.credentialFromResult(result);

		console.log(credentials);
		return result.user;
	} catch (error: any) {
		const errorMessage = error.message;

		return {
			ok: false,
			errorMessage,
		};
	}
};
export const createUser = async ({
	email,
	displayName,
	password,
}: RegisterUser): Promise<UserCredential | any> => {
	try {
		const { user } = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);

		if (!FirebaseAuth.currentUser) return;
		updateProfile(FirebaseAuth.currentUser, {
			displayName,
		}).then(() => {
			return {
				ok: true,
				...user,
			};
		});
	} catch (error) {
		return { ok: false, errorMessage: error };
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
