import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import recommendReducer from '../views/discover/children-views/recommend/store/recommend'


const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend: recommendReducer
    }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
