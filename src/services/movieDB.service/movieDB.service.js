import {axiosService} from "../index";
import {params, urls} from "../../constants";

export const movieDBService = {
    getAllMovies: (page = 1) => axiosService.get(urls.getMovies, {
        params: {
            params,
            page: page
        }
    }),
    getMoviesByGenreId: (id, page = 1) => axiosService.get(urls.getMoviesByGenres + id, {
        params: {
            params,
            page: page
        }
    }),
    topRatedMovies: () => axiosService.get(urls.topRatedMovies, {
        params: {
            params,
        }
    }),
    getRecommendation: (id, page = 1) => axiosService.get(urls.getSimilar + `${id}/similar`, {
        params: {
            params,
            page: page
        }
    }),
    searchMovie: (title) => axiosService.get(urls.search + title, {
        params: {
            params
        }
    }),
    getUpcoming:(page)=> axiosService.get(urls.getUpcoming,{params:{
        params,
            page
        }}),
};

