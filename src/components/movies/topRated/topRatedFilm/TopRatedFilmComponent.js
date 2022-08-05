import React from 'react';
import {postersURL} from "../../../../constants";

import './TopRatedFilm.css';
import {RateComponent} from "../../../index";
import {NavLink} from "react-router-dom";
import BadgeRateComponent from "../../../badge/badgeRate/BadgeRateComponent";

const TopRatedFilmComponent = ({movie}) => {

    const {title,backdrop_path,vote_average,id} = movie;


    return (
        <div>

            <div className={'img-wrap'}>
                <img src={`${postersURL + backdrop_path}`} alt={`${title}`} style={{width: '945px', height: '502px'}}/>
            <div className={'movieData'}>

            <NavLink to={'/movie/' + id.toString() + '/movieData'} className={'topMovieLink'} state={movie}>
                <div>{title}</div>
                <BadgeRateComponent item={vote_average}/></NavLink>
                <RateComponent initialRating={vote_average} className={'star'} color={'lightyellow'}/>
                </div>
            </div>
        </div>
    );
};

export default TopRatedFilmComponent;