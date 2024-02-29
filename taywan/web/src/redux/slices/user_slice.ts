const API = "http://localhost:5000/api/users"
// const API = "https://taywan.onrender.com/api/users";

import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (userId) => `/${userId}`,

        }),
    }),
});

export const { useGetUserQuery } = userApi;