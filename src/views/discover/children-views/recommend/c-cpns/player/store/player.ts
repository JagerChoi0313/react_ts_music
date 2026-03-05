import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { parseLyric } from '@/utils/parse-lyric'
import { getSongDetail, getSongLyric, getSongUrl } from '../service/player'

interface IPlayerState {
  currentSong: any
  currentSongIndex: number
  playSongList: any[]
  lyricList: { time: number; content: string }[]
  lyricIndex: number
  songUrl: string
  currentTime: number
  duration: number
  isPlaying: boolean
}

const initialState: IPlayerState = {
  currentSong: {
    name: '',
    ar: [],
    al: {}
  },
  currentSongIndex: -1,
  playSongList: [],
  lyricList: [],
  lyricIndex: 0,
  songUrl: '',
  currentTime: 0,
  duration: 0,
  isPlaying: false
}

export const fetchCurrentSongAction = createAsyncThunk(
  'player/currentSong',
  async (payload: number | { id: number; playSongList?: any[] }, { dispatch, getState }) => {
    const id = typeof payload === 'number' ? payload : payload.id
    const incomingPlaySongList = typeof payload === 'number' ? undefined : payload.playSongList
    const state: any = getState()
    const currentPlaySongList = incomingPlaySongList ?? state.player.playSongList

    if (incomingPlaySongList?.length) {
      dispatch(changePlaySongListAction(incomingPlaySongList))
    }

    if (currentPlaySongList?.length) {
      const targetIndex = currentPlaySongList.findIndex((item: any) => item.id === id)
      dispatch(changeCurrentSongIndexAction(targetIndex))
    }

    const res = await getSongDetail(id)
    const song = res?.songs?.[0]
    if (!song) return

    dispatch(changeCurrentSongAction(song))
    dispatch(changeDurationAction(song.dt ?? 0))
    dispatch(changeCurrentTimeAction(0))
    dispatch(changeLyricIndexAction(0))

    const lyricRes = await getSongLyric(id)
    const lyricString = lyricRes?.lrc?.lyric ?? ''
    const parsedLyric = parseLyric(lyricString)
    dispatch(changeLyricListAction(parsedLyric))

    const urlRes = await getSongUrl(id)
    const songUrl = urlRes?.data?.[0]?.url ?? ''
    dispatch(changeSongUrlAction(songUrl))
    dispatch(changeIsPlayingAction(!!songUrl))
  }
)

export const playNextSongAction = createAsyncThunk(
  'player/nextSong',
  async (_: void, { dispatch, getState }) => {
    const state: any = getState()
    const playSongList = state.player.playSongList
    const currentSongIndex = state.player.currentSongIndex
    if (!playSongList.length) return

    const nextIndex = currentSongIndex === -1
      ? 0
      : (currentSongIndex + 1) % playSongList.length
    const nextSong = playSongList[nextIndex]
    if (!nextSong?.id) return
    dispatch(fetchCurrentSongAction(nextSong.id))
  }
)

export const playPrevSongAction = createAsyncThunk(
  'player/prevSong',
  async (_: void, { dispatch, getState }) => {
    const state: any = getState()
    const playSongList = state.player.playSongList
    const currentSongIndex = state.player.currentSongIndex
    if (!playSongList.length) return

    const prevIndex = currentSongIndex === -1
      ? 0
      : (currentSongIndex - 1 + playSongList.length) % playSongList.length
    const prevSong = playSongList[prevIndex]
    if (!prevSong?.id) return
    dispatch(fetchCurrentSongAction(prevSong.id))
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changeCurrentSongIndexAction(state, { payload }) {
      state.currentSongIndex = payload
    },
    changeLyricListAction(state, { payload }) {
      state.lyricList = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changeSongUrlAction(state, { payload }) {
      state.songUrl = payload
    },
    changeCurrentTimeAction(state, { payload }) {
      state.currentTime = payload
    },
    changeDurationAction(state, { payload }) {
      state.duration = payload
    },
    changeIsPlayingAction(state, { payload }) {
      state.isPlaying = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changePlaySongListAction,
  changeCurrentSongIndexAction,
  changeLyricListAction,
  changeLyricIndexAction,
  changeSongUrlAction,
  changeCurrentTimeAction,
  changeDurationAction,
  changeIsPlayingAction
} = playerSlice.actions
export default playerSlice.reducer
