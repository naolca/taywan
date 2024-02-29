
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




const API = "http://localhost:5000/api/products";


export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:API,prepareHeaders:(headers) => {
        const token = localStorage.token;
        console.log("token", token);
        if (token) {
            headers.set("Authorization", `${token}`);
        }
        return headers;
    }
}),
    endpoints:(builder) => ({
    getAllProducts:builder.query({
        query:() => ({
            url:"/",
            method:"GET"
        })
    })
})
});

export const {useGetAllProductsQuery} = productApi;