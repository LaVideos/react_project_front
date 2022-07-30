
const baseURL = 'https://api.themoviedb.org';

const postersURL = 'https://image.tmdb.org/t/p/original/';

const urls = {
    getGenres:'/3/genre/movie/list',
    getMovies:'/3/discover/movie',
    getMoviesByGenres:'/3/discover/movie?with_genres=',
    topRatedMovies:'/3/movie/top_rated',
    getSimilar:'/3/movie/'

};

export {
    baseURL,
    urls,
    postersURL
}