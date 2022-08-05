import React from 'react';

import {MoviesListComponent, TopRatedFilmsComponent} from "../../components";
import {useParams} from "react-router-dom";

import '../../components/movies/topRated/topRatedFilms/CarouselStyle.css';

const MoviesListPage = () => {

    let {id} = useParams();

    return (
        <div>
            { !id&& <div className="app__main-container">
                <TopRatedFilmsComponent/>
            </div>}

            <MoviesListComponent id={id} />
        </div>
    );
};

export default MoviesListPage;