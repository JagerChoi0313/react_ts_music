import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {getBanners,getHotRecommend,getNewAlbum} from '../service/recommend'

export const fetchBannerDataAction=createAsyncThunk('banners',
    async(arg,{dispatch})=>{
    const res=await getBanners()
    dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendAction=createAsyncThunk(
    'hotRecommend',
    async(arg,{dispatch})=>{
        const res=await getHotRecommend(8)
        dispatch(changeHotRecommendAction(res.result))

    }
)

export const fetchNewAlbumAction=createAsyncThunk(
    'newAlbum',
    async(arg,{dispatch})=>{
        const res=await getNewAlbum()
        console.log(res)
        dispatch(changeNewAlbumAction(res.albums))
    }
)

interface IRecommendState{
    banners:any[]
    hotRecommends:any[]
    newAlbums:any[]
}

const initialState:IRecommendState={
    banners:[],
    hotRecommends:[],
    newAlbums:[]
}

const RecommendSlice=createSlice({
    name:'recommend',
    initialState,
    reducers:{
        changeBannersAction(state,{payload}){
            state.banners=payload
        },
        changeHotRecommendAction(state,{payload}){
            state.hotRecommends=payload
        },
        changeNewAlbumAction(state,{payload}){
            state.newAlbums=payload
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

export const {changeBannersAction,changeHotRecommendAction,changeNewAlbumAction}=RecommendSlice.actions
export default RecommendSlice.reducer

