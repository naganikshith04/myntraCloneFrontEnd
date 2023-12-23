
import itemSlice from './itemSlice'
import { configureStore, Tuple } from '@reduxjs/toolkit'

const myntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer
    }
})



export default myntraStore