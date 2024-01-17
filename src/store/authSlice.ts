import { emptyUser } from './../interfaces/AuthInterfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, statusTypes } from '../interfaces/AuthInterfaces';
import { User } from 'firebase/auth';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: statusTypes.checkingStatus,
        user: emptyUser
    } as AuthState,
    reducers: {
        onCheckingCredentials: (state: AuthState) => {
            state.status = statusTypes.checkingStatus;
        },
        onLogin: (state: AuthState, {payload} : PayloadAction<User> ) => {
            state.status = statusTypes.authenticatedStatus;
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state: AuthState) => {
            state.status = statusTypes.notAuthenticatedStatus;
            state.user = emptyUser
            state.errorMessage = undefined;
        }
    }
});
export const { onLogin, onCheckingCredentials, onLogout} = authSlice.actions;