import {configureStore} from '@reduxjs/toolkit'
import catsReducer from "./catSlice";

export const store = configureStore({
    reducer: {
        catsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch