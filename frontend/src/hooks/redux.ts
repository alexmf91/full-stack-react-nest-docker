import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '@noister/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()
