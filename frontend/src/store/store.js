import {configureStore} from '@reduxjs/toolkit'

import AuthReducer from '../features/AuthSlice'
import UserReducer from '../features/userSlice'


const store=configureStore({
    reducer:{
        auth:AuthReducer,
        user:UserReducer,
    }
})

export default store