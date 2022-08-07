import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['PetrolStations'],
  endpoints: (builder) => ({
    getPetrolStations: builder.query({
      query: () => '/petrol-stations'
    })
  })
})

export const { useGetPetrolStationsQuery } = apiSlice
