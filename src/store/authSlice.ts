import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, statusTypes } from '../interfaces/AuthInterfaces';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: statusTypes.notAuthenticatedStatus,
        user: {
            uid: '',
            displayName: '',
            email: '',
            photoUrl: ''
        }
    } as AuthState,
    reducers: {
        onCheckingCredentials: (state: AuthState) => {
            state.status = statusTypes.checkingStatus;
        },
        onLogin: (state: AuthState, {payload} : PayloadAction<AuthState> ) => {
            state.status = statusTypes.authenticatedStatus;
            state.user = payload.user;
            state.errorMessage = undefined;
        },
    }
});
export const { onLogin } = authSlice.actions;