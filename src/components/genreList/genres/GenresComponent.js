import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresAction} from "../../../redux/slices";
import {GenreComponent} from "../../index";

import css from './Genres.module.css'

const GenresComponent = () => {

    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresAction.getAllGenres());
    }, []);

    return (
        <div className={css.genresWrap}>
            {
                genres.map(genre=><GenreComponent genre={genre} key={genre.id}/>)
            }

        </div>
    );
};

export default GenresComponent;