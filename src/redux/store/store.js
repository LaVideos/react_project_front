import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, movieReducer} from "../slices";

const comb = combineReducers({
    movies:movieReducer,
    genres:genresReducer,
});

const setupStore = () => configureStore({
    reducer:comb
});

export {
    setupStore
}