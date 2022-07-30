import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../../redux/slices";
import {MovieFromListComponent, PaginationComponent} from "../../index";
import {useSearchParams} from "react-router-dom";

const MoviesListComponent = ({id}) => {

    const {movies, topRatedFilm} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query,setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        if (!id) {
            dispatch(movieActions.getAllMovies({page:query.get('page')}));
            dispatch(movieActions.getTopRatedFilm());
        } else {
            dispatch(movieActions.getMoviesById({id,page:query.get('page')}));
        }
    }, [query,id, dispatch]);

    const nextPage = ()=>{
        const next_ = +query.get('page')+1;
        setQuery({page:`${next_}`});
    };

    const prevPage = () => {
        if(+query.get('page') > 1){
        const prev_ = +query.get('page')-1;
        setQuery({page:`${prev_}`});}
    }

    const nextTenPage = ()=>{
        const next_ = +query.get('page')+10;
        setQuery({page:`${next_}`});
    }

    const prevTenPage = () => {
        if(+query.get('page') > 10){
        const prev_ = +query.get('page')-10;
        setQuery({page:`${prev_}`});}
        else {
            setQuery({page:`${1}`});
        }
    }

    const paginate = page => setQuery({page:`${page}`});





    return (
        <div>
            {!id && <div>
                <div>20 TOP RATED FILMS</div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {topRatedFilm.map(movie => <MovieFromListComponent key={movie.id} movie={movie}/>)}
                </div>
            </div>}
            <div>{!id && `Popular NOW`}</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>{
                movies.map(movie => <MovieFromListComponent key={movie.id} movie={movie}/>)
            }</div>
            <div style={{display:"flex"}}>
                <button disabled={+query.get('page')===1} onClick={prevTenPage}>Prev 10</button>
                <button disabled={+query.get('page') === 1} onClick={prevPage}>Prev</button>
                <PaginationComponent moviePerPage={20} totalMovies={50} paginate={paginate}/>
                <button onClick={nextPage}>Next</button>
                <button onClick={nextTenPage}>Next 10</button>
            </div>
        </div>
    );
};

export default MoviesListComponent;