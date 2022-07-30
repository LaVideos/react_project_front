import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieDBService} from "../../services";

const initialState = {
    movies:[],
    errors:null,
    moviesWithGenre:[],
    topRatedFilm:[],
    movie:null
};

const getSimilarMovies = createAsyncThunk(
    'movieDBSlice/getSimilarMovies',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieDBService.getSimilarMovies(id);
            return data.results
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);


const getTopRatedFilm = createAsyncThunk(
    'movieDBSlice/getTopRatedFilm',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await movieDBService.topRatedMovies();
            return data.results
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getAllMovies = createAsyncThunk(
    'movieDBSlice/getAllMovies',
    async ({page},{rejectWithValue})=>{
        try {
            const {data} = await movieDBService.getAllMovies(page);
            return data.results
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const getMoviesById = createAsyncThunk(
    'movieDBSlice/getMoviesById',
    async ({id,page},{rejectWithValue})=>{
       try {
           const {data} = await movieDBService.getMoviesByGenreId(id,page);
           return data.results
       }catch (e){
           return rejectWithValue(e.response.data)
       }
    }
)

const movieDBSlice = createSlice({
    name:'movieDBSlice',
    initialState,
    reducers:{
        getMovieInfo:(state, action)=>{
            state.movie = action.payload
        }
    },
    extraReducers:(builder)=> {
        builder
            .addCase(getAllMovies.fulfilled,(state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMoviesById.fulfilled,(state, action) => {
                state.movies = action.payload;
            })
            .addCase(getTopRatedFilm.fulfilled,(state, action) => {
                state.topRatedFilm = action.payload;
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


const {reducer:movieReducer,actions:{getMovieInfo}} = movieDBSlice;


const movieActions = {
    getAllMovies,
    getMoviesById,
    getTopRatedFilm,
    getMovieInfo,
    getSimilarMovies
}

export {
    movieReducer,
    movieActions
}