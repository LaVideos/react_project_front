import React from 'react';

import {RecommendationMoviesComponent} from "../../components";
import {useParams} from "react-router-dom";

const RecommendationMoviesPage = () => {
    const {movieId} = useParams();

    return (
        <div>
            <RecommendationMoviesComponent movieId={movieId}/>
        </div>
    );
};

export default RecommendationMoviesPage;