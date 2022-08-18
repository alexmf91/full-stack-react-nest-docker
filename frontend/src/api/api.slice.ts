import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { PetrolStation } from '@noister/pages/gasazon/types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL as string }),
  tagTypes: ['PetrolStations'],
  endpoints: (builder) => ({
    getPetrolStations: builder.query<PetrolStation[], []>({
      query: () => '/petrol-stations'
    })
  })
})

export const { useGetPetrolStationsQuery } = apiSlice
