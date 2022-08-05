import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieDBService} from "../../services";

const initialState = {
    pages: null,
    errors: null
};

const getAllMoviesPages = createAsyncThunk(
    'movieDBSlice/getAllMoviesPages',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieDBService.getAllMovies();
            return data.total_pages
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMoviesByIdPage = createAsyncThunk(
    'movieDBSlice/getMoviesByIdPage',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieDBService.getMoviesByGenreId(id);
            return data.total_pages
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getUpcomingPage = createAsyncThunk(
    'movieDBSlice/getUpcomingPage',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieDBService.getUpcoming();
            return data.total_pages
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getRecommendationMoviesPages = createAsyncThunk(
    'movieDBSlice/getSimilarMoviesPages',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieDBService.getRecommendation(id);
            return data.total_pages
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const pagesSlice = createSlice({
    name: 'pagesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUpcomingPage.fulfilled, (state, action) => {
                state.pages = action.payload
            })
            .addCase(getMoviesByIdPage.fulfilled, (state, action) => {
                state.pages = action.payload
            })
            .addCase(getAllMoviesPages.fulfilled, (state, action) => {
                state.pages = action.payload
            })
            .addCase(getRecommendationMoviesPages.fulfilled,(state, action)=>{
                state.pages = action.payload
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

const {reducer: pagesReducer} = pagesSlice;


const pagesActions = {
    getAllMoviesPages,
    getMoviesByIdPage,
    getUpcomingPage,
    getRecommendationMoviesPages
}

export {
    pagesActions, pagesReducer
}