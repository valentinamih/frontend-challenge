import {CatType} from "../types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {catsAPI} from "../api/api";

let initialState: InitialStateType = {
    cats: [],
    isFetching: false
}

export const getCats = createAsyncThunk('cats/getCat',
    async function () {
        let res = await catsAPI.requestCat()
        return res.data
    })

export const catsSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        toggleLikeCat(state, action) {
            const {cats} = state
            const itemIndex = cats.findIndex(cat => cat.id === action.payload.id)
            state.cats[itemIndex].isFavourite = !state.cats[itemIndex].isFavourite
        }
    },
    extraReducers: builder => {
        builder.addCase(getCats.pending, (state, action) => {
            state.isFetching = true
        })
        builder.addCase(getCats.fulfilled, (state, action) => {
            state.cats = [...state.cats, ...action.payload]
        })
    }
})

type InitialStateType = {
    cats: Array<CatType>
    isFetching: boolean
}

export default catsSlice.reducer
export const {toggleLikeCat} = catsSlice.actions