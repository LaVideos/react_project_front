import React from 'react';
import {NavLink} from "react-router-dom";

const GenreComponent = ({genre}) => {
    const {id,name} = genre;
    return (
        <div>
           <NavLink to={id.toString()+'/moviesByGenre'}>{name}</NavLink>
        </div>
    );
};

export default GenreComponent;