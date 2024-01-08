import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./combineSlices";

const store = configureStore({
    reducer: rootReducer
})

export default store;