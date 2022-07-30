import {axiosService} from "../index";
import {urls} from "../../constants";

export const movieDBService = {
    getAllMovies:(page=1)=>axiosService.get(urls.getMovies,{params:{page}}),
    getMoviesByGenreId:(id,page=1)=>axiosService.get(urls.getMoviesByGenres+id,{params:{page}}),
    topRatedMovies:()=>axiosService.get(urls.topRatedMovies),
    getSimilarMovies:(id)=>axiosService.get(urls.getSimilar+`${id}/similar`)
}
// https://api.themoviedb.org/3/movie/616037/similar?api_key=dba25fc48bd56d66c46e87045ee30ec7&language=en-US&page=1