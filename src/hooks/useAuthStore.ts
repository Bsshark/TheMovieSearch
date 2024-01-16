import { AuthState, LoginUser } from "../interfaces/AuthInterfaces";
import { useAppDispatch, useAppSelector } from "./dispatch";


export const useAuthStore = () => {
    const dispatch = useAppDispatch();

	const { status, user, errorMessage = undefined}: AuthState = useAppSelector(
		(state) => state.auth
	);

    /* const startLogin = async({email, password}: LoginUser) => {

    } */



    return {
        //Propiedades
        status,
        user,
        errorMessage,

        //Metodos
        //startLogin
    }
}