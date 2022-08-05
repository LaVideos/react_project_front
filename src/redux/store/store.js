import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, movieReducer, pagesReducer, reviewReducer} from "../slices";

const comb = combineReducers({
    movies:movieReducer,
    genres:genresReducer,
    review:reviewReducer,
    pages:pagesReducer
});

const setupStore = () => configureStore({
    reducer:comb
});

export {
    setupStore
}