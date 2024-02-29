
const API = "http://localhost:5000/api/reviews"
// const API = "https://taywan.onrender.com/api/users";

import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const reviewsApi = createApi({
    reducerPath: "reviewsApi",
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    endpoints: (builder) => ({
        getAllReviews: builder.query({
            query: () => "/",
            
        }),

        getReviews: builder.query({
            query: (productId) => ({
                url: `/product/${productId}`,
                method: "GET",
            }),
        }),
        addReview: builder.mutation({
            query: (body) => ({
                url: "/reviews",
                method: "POST",
                body: body,
            }),
        }),
    }),
});


export const { useGetReviewsQuery, useAddReviewMutation, useGetAllReviewsQuery } = reviewsApi;