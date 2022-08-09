import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '@noister/store'
import { client } from '@noister/api/client'
import { PetrolStation } from './types'

interface GasazonState {
  petrolStations: Array<PetrolStation> | []
  bottlesCombination: {}
}

const initialState: GasazonState = {
  petrolStations: [],
  bottlesCombination: {}
}

export const getAllPetrolStations = createAsyncThunk('gasazon/getAll', async () => {
  const allStations = await client.get('/petrol-stations')
  return allStations
})

export const gasazonSlice = createSlice({
  name: 'gasazon',
  initialState,
  reducers: {
    setBottlesCombination(state, action) {
      state.bottlesCombination = action.payload
    }
  }
})

export const gasazonSelector = (state: RootState) => state.gasazon

export const selectPetrolStations = (state: RootState) => state.gasazon.petrolStations

export const { setBottlesCombination } = gasazonSlice.actions

export default gasazonSlice.reducer
