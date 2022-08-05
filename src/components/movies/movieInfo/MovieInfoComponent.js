import React from 'react';
import {useSelector} from "react-redux";

import {postersURL} from "../../../constants";
import {BadgePaperComponent, RateComponent, ReviewsComponent} from "../../index";

import css from './MovieInfo.module.css'

import {ForwardIcon, RecommendIcon, RemoveRedEyeIcon} from "../../badge/badgeIcons";
import {NavLink} from "react-router-dom";

const MovieInfoComponent = () => {
    const {movie} = useSelector(state => state.movies)

    const theme = localStorage.getItem('theme');

    let color = 'lightYellow';

    if (theme === 'dark') {
        color = '#fffb00';
    }


    return (<div className={theme === 'dark' ? css.infoPageLight : css.infoPageDark}>{movie &&
        <div>
            <div className={theme === 'dark' ? css.wrapLight : css.wrapDark}>
                <div className={css.titlePoster}>

                    <div className={css.title}>{movie.title}</div>

                    {movie.vote_average &&
                        <RateComponent initialRating={movie.vote_average} numTotalStars={10} color={color}/>}

                    {movie.poster_path &&
                        <img src={`${postersURL + movie.poster_path}`} style={{width: '400px'}} alt=""/>}

                </div>


                <div className={css.data}>
                    <div>Adult : {movie.adult ? 'Yes' : 'No'}</div>
                    <div>Original language : {movie.original_language}</div>
                    <div>Original title : {movie.original_title}</div>
                    <div>Popularity : {movie.popularity}</div>
                    <div>Release date : {movie.release_date}</div>
                    <div>Average vote : {movie.vote_average}</div>
                    <div>Count votes : {movie.vote_count}</div>
                    <div className={css.overview}><p>Overview :</p> {movie.overview}</div>
                    <div className={css.img}><img src={`${postersURL + movie.backdrop_path}`} style={{width: '400px'}}
                                                  alt=""/></div>
                </div>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <div className={css.plane}>
                <div className={css.reviews}>
                    <ForwardIcon className={css.down}/>
                    <BadgePaperComponent data={'Review'} width={150} color={'orange'} height={50}/>
                    <RemoveRedEyeIcon/>
                </div>
                <NavLink to={movie.id.toString() + '/recommendation'}>
                    <div className={css.recommend}>
                        <RecommendIcon/>
                        <BadgePaperComponent data={'Go to Recommendation'} width={450} color={'orange'} height={50}/>
                        <ForwardIcon/>
                    </div>
                </NavLink>
            </div>
            <div>
                <ReviewsComponent id={movie.id}/>
            </div>
        </div>}
    </div>);
};

export default MovieInfoComponent;
