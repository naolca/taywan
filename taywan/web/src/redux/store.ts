import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './slices/auth_slice';

export const Store = configureStore(
    {
        reducer:{
            [authApi.reducerPath]: authApi.reducer,
        },

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware),

    }

)


setupListeners(Store.dispatch)


