import { createSlice } from '@reduxjs/toolkit';
export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
    },
    reducers: {
        increment: (state, /* action */ ) => {
            
        },
    }
});
export const { increment } = movieSlice.actions;