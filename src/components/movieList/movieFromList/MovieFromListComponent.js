import React from 'react';
import {postersURL} from "../../../constants";
import {NavLink} from "react-router-dom";

const MovieFromListComponent = ({movie}) => {
    const {original_title,poster_path,id} = movie

    return (
        <div>
            <NavLink to={'/'+id.toString()+'/movieData'} state={movie}><img src={`${postersURL + poster_path}`} alt={`${original_title}`} style={{width: '200px'}}/></NavLink>
        </div>
    );
};

export default MovieFromListComponent;