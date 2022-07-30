import React from 'react';
import {useSelector} from "react-redux";
import {postersURL} from "../../constants";

const MovieInfoComponent = () => {
    const {movie} = useSelector(state => state.movies)

    return (movie&&<div>
        <div>{movie.title}</div>
        <div><img src={`${postersURL+movie.backdrop_path}`} style={{width:'400px'}} alt=""/></div>
    </div>);
};

export default MovieInfoComponent;