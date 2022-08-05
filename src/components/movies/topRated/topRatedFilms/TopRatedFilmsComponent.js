import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../../../redux/slices";
import {BadgePaperComponent, CarouselComponent} from "../../../index";

import css from './Top.module.css'

const TopRatedFilmsComponent = () => {

    const {topRatedFilm} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(movieActions.getTopRatedFilm());
    }, []);

    const theme = localStorage.getItem('theme');

    let color = 'white';

    if(theme==='dark'){
        color = 'black'
    }

    return (
        <div>
            <div className={css.wrap_topRated}>
                <div className={theme === 'black'? css.topRatedLight : css.topRatedDark}><BadgePaperComponent data={'20 BEST OF THE BEST'} color={color} width={500} height={56}/></div>
            </div>
                <div className={css.carouselWrap}>
                    <CarouselComponent movies={topRatedFilm}/>
            </div>
        </div>
    );
};

export default TopRatedFilmsComponent;