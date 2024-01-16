export interface AuthState {
	status: statusTypes;
	user: User;
	errorMessage?: string;
}

export interface User {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
}

export interface LoginUser {
	email: string;
	password: string;
}

export interface ErrorRequest {
	ok: boolean,
	errorMessage: string
}
/**-- States  --**/
export enum statusTypes {
	checkingStatus = "checking",
	authenticatedStatus = "authenticated",
	notAuthenticatedStatus = "not-authenticated",
}
