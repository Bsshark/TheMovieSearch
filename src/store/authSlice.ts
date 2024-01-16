import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, User, statusTypes } from '../interfaces/AuthInterfaces';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: statusTypes.notAuthenticatedStatus,
        user: {
            uid: '',
            displayName: '',
            email: '',
            photoURL: ''
        }
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
    }
});
export const { onLogin, onCheckingCredentials } = authSlice.actions;