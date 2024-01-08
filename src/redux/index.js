import {combineReducers, configureStore} from "@reduxjs/toolkit"
import loginSliceReducer from "./loginSlice"

export default configureStore({
    reducer: {
        login: loginSliceReducer,
    },
})