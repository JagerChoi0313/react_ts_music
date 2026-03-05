import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux'
import recommendReducer from '../views/discover/children-views/recommend/store/recommend'
import playerReducer from '../views/discover/children-views/recommend/c-cpns/player/store/player'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend: recommendReducer,
        player:playerReducer
    }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const shallowEqualApp = shallowEqual

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
