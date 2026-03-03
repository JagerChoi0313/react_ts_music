import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum, getNewRanking, getOriginalRanking, getSoarRanking } from '../service/recommend'

// 获取推荐数据
export const fetchRecommendDataAction = createAsyncThunk(
  'fetchData',
  async (_, { dispatch }) => {
    //获取轮播图数据
    const bannerRes = await getBanners()
    dispatch(changeBannersAction(bannerRes.banners))

    const hotRes = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(hotRes.result))

    const albumRes = await getNewAlbum()
    dispatch(changeNewAlbumAction(albumRes.albums))
  }
)

// const rankingIDs = [19723756, 3779629, 2884035]

// // 获取榜单数据
// export const fetchRankingDataAction = createAsyncThunk(
//   'RankingData',
//   async (_, { dispatch }) => {
//     //获取榜单数据
//     //1.每一个请求单独处理
//     // for(const id of rankingIDs)
//     // {
//     //     getPlayListDetail(id).then(res=>{
//     //         switch(id){
//     //             case 19723756:
//     //                 console.log("飙升榜数据",res)
//     //                 break
//     //             case 3779629:
//     //                 console.log("新歌榜数据",res)
//     //                 break
//     //             case 2884035:
//     //                 console.log("原创榜数据",res)
//     //                 break
//     //         }
//     //     })
//     // }

//     //将三个结果都拿到，统一放到一个数组中管理
//     //保障一：获取到所有结果后进行dispatch操作
//     //保障二：获取到的结果有正确的顺序

//     const res = await Promise.all(
//       rankingIDs.map(id => getPlayListDetail(id))
//     )

//     const playlists = res.map(item => item.playlist)

//     dispatch(changeRankingsAction(playlists))
//   }
// )

export const fetchSoarRanking = createAsyncThunk('soarRanking', async (_args, { dispatch }) => {
  const res = await getSoarRanking()
  dispatch(changeSoarRanking(res.playlist.tracks.slice(0, 10)))
})
export const fetchNewRanking = createAsyncThunk('newRanking', async (_args, { dispatch }) => {
  const res = await getNewRanking()
  dispatch(changeNewRanking(res.playlist.tracks.slice(0, 10)))
})
export const fetchOriginalRanking = createAsyncThunk('originalRanking', async (_args, { dispatch }) => {
  const res = await getOriginalRanking()
  dispatch(changeOriginalRanking(res.playlist.tracks.slice(0, 10)))
})

interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  soarRanking: any[]
  newRanking: any[]
  originalRanking: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  soarRanking: [],
  newRanking: [],
  originalRanking: []
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
    },
    changeSoarRanking(state, action) {
      state.soarRanking = action.payload
    },
    changeNewRanking(state, action) {
      state.newRanking = action.payload
    },
    changeOriginalRanking(state, action) {
      state.originalRanking = action.payload
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

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeSoarRanking,
  changeNewRanking,
  changeOriginalRanking
} = RecommendSlice.actions

export default RecommendSlice.reducer
