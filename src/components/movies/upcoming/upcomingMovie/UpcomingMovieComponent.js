import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import css from "../../movieList/movieFromList/MoviePoster.module.css";
import {FiberNewIcon} from "../../../badge/badgeIcons";
import {postersURL} from "../../../../constants";

const UpcomingMovieComponent = ({movie}) => {
    const {original_title,poster_path,id,release_date} = movie

    const theme = localStorage.getItem('theme');

    const {pathname} = useLocation();


    return (
        <div className={theme === 'dark'? css.posterWrapLight : css.posterWrapDark}>
            { pathname !=='/upcoming'&&
                <div className={css.badgeNew}>{release_date.includes('2022') && <FiberNewIcon/>}</div>}

            <NavLink to={'/movie/'+id.toString()+'/movieData'} state={movie}>
                {poster_path?<img src={`${postersURL + poster_path}`} alt={`${original_title}`} className={theme === 'dark'? css.posterLight : css.posterDark}/>
                    :
                <img src="https://phti.by/wp-content/themes/bb/acf-blocks/blocks/block-9/img/not-found.png" alt="" className={theme === 'dark'? css.posterLight:css.posterDark}/>}
            </NavLink>

        </div>
    );
};

export default UpcomingMovieComponent;