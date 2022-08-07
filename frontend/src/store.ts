import { configureStore } from '@reduxjs/toolkit'
import gasazonReducer from '@noister/features/Gasazon/gasazon.slice'
import { apiSlice } from './api/api.slice'

export const store = configureStore({
  reducer: {
    gasazon: gasazonReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch