import React from 'react';
import {MoviesListComponent} from "../../components";
import {useParams} from "react-router-dom";

const MoviesListPage = () => {

    let {id} = useParams();

    return (
        <div>
            <MoviesListComponent id={id} />
        </div>
    );
};

export default MoviesListPage;