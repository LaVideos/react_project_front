import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions, pagesActions} from "../../../../redux/slices";
import {AccessTimeIcon} from "../../../badge/badgeIcons";
import BadgePaperComponent from "../../../badge/badgePaper/BadgePaperComponent";
import {MovieFromListComponent, PaginationComponent} from "../../../index";

import css from "./Upcoming.module.css";

const UpcomingMoviesComponent = () => {

    const {upcoming} = useSelector(state => state.movies);
    const {pages} = useSelector(state => state.pages)

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getUpcoming({page: query.get('page')}));
        dispatch(pagesActions.getUpcomingPage());
    }, [query, dispatch]);

    const theme = localStorage.getItem('theme');

    return (
        <div className={css.WrapUpcoming}>
            <div className={css.Upcoming}>

                <AccessTimeIcon/>
                <BadgePaperComponent data={'Upcoming'} color={'orange'} height={40} width={170}/>
                <AccessTimeIcon/></div>

            <div className={theme === 'dark' ? css.postersWrapLight : css.postersWrapDark}>{
                upcoming.map(movie => <MovieFromListComponent key={movie.id} movie={movie}/>)
            }</div>

            <PaginationComponent query={query} setQuery={setQuery} count={+pages}/>
        </div>
    );
};

export default UpcomingMoviesComponent;