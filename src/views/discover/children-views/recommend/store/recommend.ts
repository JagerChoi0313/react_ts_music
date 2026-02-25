import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {getBanners} from '../service/recommend'

export const fetchBannerDataAction=createAsyncThunk('banners',
    async(arg,{dispatch})=>{
    const res=await getBanners()
    dispatch(changeBannersAction(res.banners))
})

interface IRecommendState{
    banners:any[]
}

const initialState:IRecommendState={
    banners:[]
}

const RecommendSlice=createSlice({
    name:'recommend',
    initialState,
    reducers:{
        changeBannersAction(state,{payload}){
            state.banners=payload
        }
    },
    // extraReducers:(builder)=>{
    //     builder
    //     .addCase(fetchBannerDataAction.pending,(state,action)=>{
    //         console.log('pedding')
    //     })
    //     .addCase(fetchBannerDataAction.fulfilled,(state,{payload})=>{
    //         state.banners=payload
    //     })
    //     .addCase(fetchBannerDataAction.rejected,()=>{
    //         console.log('rejected')
    //     })
    // }
})

export const {changeBannersAction}=RecommendSlice.actions
export default RecommendSlice.reducer

