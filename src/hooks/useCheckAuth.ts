import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./dispatch";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { onLogin, onLogout } from "../store/authSlice";
import { AuthState, statusTypes } from '../interfaces/AuthInterfaces';
import { useMovieStore } from "./useMovieStore";

export const useCheckAuth = () => {
	const { status }: AuthState = useAppSelector((state) => state.auth);
    
    const { startLoadingBookmarks } = useMovieStore();

	const dispatch = useAppDispatch();

	useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if(!user) return dispatch(onLogout());
            dispatch(onLogin({ ...user}));
            dispatch(startLoadingBookmarks());
        })
    }, []);

    return status as statusTypes;
};
