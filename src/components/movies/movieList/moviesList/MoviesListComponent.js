import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions, pagesActions} from "../../../../redux/slices";
import {MovieFromListComponent, PaginationComponent} from "../../../index";
import {useSearchParams} from "react-router-dom";

import css from './MoviesList.module.css'

import {LocalFireDepartmentIcon} from "../../../badge/badgeIcons";
import BadgePaperComponent from "../../../badge/badgePaper/BadgePaperComponent";

const MoviesListComponent = ({id}) => {

    const {movies} = useSelector(state => state.movies);
    const {pages} = useSelector(state => state.pages)

    const dispatch = useDispatch();

    const [query,setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        if (!id) {
            dispatch(movieActions.getAllMovies({page:query.get('page')}));
            dispatch(pagesActions.getAllMoviesPages());
        } else {
            dispatch(movieActions.getMoviesById({id,page:query.get('page')}));
            dispatch(pagesActions.getMoviesByIdPage({id}));
        }
    }, [query,id, dispatch]);

    const theme = localStorage.getItem('theme');

    return (
        <div>
            {!id&&
            <div className={css.popularNow}><LocalFireDepartmentIcon/><BadgePaperComponent data={'Popular NOW'} color={'orange'} height={45} width={200}/><LocalFireDepartmentIcon/></div>}
            <div className={theme === 'dark'? css.postersWrapLight : css.postersWrapDark}>{
                movies.map(movie => <MovieFromListComponent key={movie.id} movie={movie}/>)
            }</div>
            <PaginationComponent query={query} setQuery={setQuery} count={+pages}/>
        </div>
    );
};

export default MoviesListComponent;