import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './slices/auth_slice';
import { productApi } from './slices/products_slice';
import { tokenState } from './slices/auth_state_slice';
import { reviewsApi } from './slices/reviews_slice';
import { userApi } from './slices/user_slice';

export const Store = configureStore(
    {
        reducer:{
            [authApi.reducerPath]: authApi.reducer,
            [productApi.reducerPath]:productApi.reducer,
            [tokenState.name]: tokenState.reducer,
            [reviewsApi.reducerPath]: reviewsApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
        },

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, reviewsApi.middleware, userApi.middleware),
            

    }

)


export type RootState = ReturnType<typeof Store.getState>


setupListeners(Store.dispatch)


