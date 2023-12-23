
import fetchStatusSlice from './fetchStatusSlice'
import itemSlice from './itemSlice'
import { configureStore, Tuple } from '@reduxjs/toolkit'

const myntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer
    }
})



export default myntraStore