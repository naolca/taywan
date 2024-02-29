import { createSlice } from "@reduxjs/toolkit";

export const tokenState = createSlice({
    name: "token",
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state: { token: any; }, action: { payload: any; }) => {
            state.token = action.payload;
        },
        getToken: (state: { token: any; }) => {
            return state.token;
        }

    },
});


export const { setToken, getToken } = tokenState.actions;
