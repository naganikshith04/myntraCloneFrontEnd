
import bagSlice from './bagSlice'
import fetchStatusSlice from './fetchStatusSlice'
import itemSlice from './itemSlice'
import { configureStore } from '@reduxjs/toolkit'

const myntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer,
        bag: bagSlice.reducer, 
    }
})



export default myntraStore