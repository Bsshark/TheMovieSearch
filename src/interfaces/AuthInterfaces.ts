import { User } from "firebase/auth";

export interface AuthState {
	status: statusTypes;
	user: User;
	errorMessage?: string;
}



export interface LoginUser {
	email: string;
	password: string;
}

export interface RegisterUser {
	displayName: string;
	email: string;
	password: string;
}

export interface ErrorRequest {
	ok: boolean;
	errorMessage: string;
}
/**-- States  --**/
export enum statusTypes {
	checkingStatus = "checking",
	authenticatedStatus = "authenticated",
	notAuthenticatedStatus = "not-authenticated",
}

export const emptyUser = { } as User;