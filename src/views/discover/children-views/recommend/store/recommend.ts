import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

export const fetchRecommendDataAction = createAsyncThunk('fetchData', (_, { dispatch }) => {
    //获取轮播图数据
    getBanners().then((res) => {
        dispatch(changeBannersAction(res.banners))
    })
    getHotRecommend(8).then((res) => {
        dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbum().then((res) => {
        dispatch(changeNewAlbumAction(res.albums))
    })
})

interface IRecommendState {
    banners: any[]
    hotRecommends: any[]
    newAlbums: any[]
}

const initialState: IRecommendState = {
    banners: [],
    hotRecommends: [],
    newAlbums: []
}

const RecommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload
        },
        changeHotRecommendAction(state, { payload }) {
            state.hotRecommends = payload
        },
        changeNewAlbumAction(state, { payload }) {
            state.newAlbums = payload
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

export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction } = RecommendSlice.actions
export default RecommendSlice.reducer

