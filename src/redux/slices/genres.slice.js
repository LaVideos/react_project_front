import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";

const initialState = {
    genres:[]
};

const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await genresService.getAllGenres();
            return data.genres
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getAllGenres.fulfilled,(state, action) => {
                state.genres = action.payload;
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if(type==='rejected'){
                    state.errors = action.payload
                }else {
                    state.errors = null;
                }
            })
    }
});

const {reducer:genresReducer} = genresSlice;

const genresAction = {
    getAllGenres
}

export {
    genresAction,
    genresReducer
}