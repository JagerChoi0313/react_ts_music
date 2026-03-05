import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail } from '../service/player'

interface IPlayerState {
  currentSong: any
}

const initialState: IPlayerState = {
  currentSong: {
    name: '',
    ar: [],
    al: {}
  }
}

export const fetchCurrentSongAction = createAsyncThunk(
  'player/currentSong',
  async (id: number, { dispatch }) => {
    const res = await getSongDetail(id)
    const song = res?.songs?.[0]
    if (song) {
      dispatch(changeCurrentSongAction(song))
    }
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeCurrentSongAction } = playerSlice.actions
export default playerSlice.reducer
