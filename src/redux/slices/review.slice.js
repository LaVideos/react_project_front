import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {reviewService} from "../../services";

const initialState = {
    review: [],
    errors:null
}

const getReview = createAsyncThunk(
    'reviewSlice/getReview',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await reviewService.getAllReview(id);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getReview.fulfilled, (state, action) => {
                state.review = action.payload
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null;
                }
            })
    }
});

const {reducer: reviewReducer} = reviewSlice

const reviewActions = {
    getReview
}

export {
    reviewActions,
    reviewReducer
}