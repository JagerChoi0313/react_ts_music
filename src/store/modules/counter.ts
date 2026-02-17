import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:100,
        message:'Hello Redux'
    },
    reducers:{}
})

export default counterSlice.reducer
