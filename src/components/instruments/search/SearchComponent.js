import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../../redux/slices";

import {BadgeErrorComponent, BadgeInputTitleComponent, BadgePaperComponent, MovieFromListComponent} from "../../index";

import css from './Search.module.css';


const SearchComponent = () => {
   const {reset,register,handleSubmit,formState:{errors}} = useForm({mode:'all'});

   const {moviesSearch} = useSelector(state => state.movies);

   const dispatch = useDispatch();

  const [yourSearch,setYourSearch] = useState('');


   const submit = async ({title}) => {
        await dispatch(movieActions.getSearchMovie({title}));
       setYourSearch(title)
       reset();
   }

    const theme = localStorage.getItem('theme');

    let color = 'white';

    if(theme==='dark'){
        color = 'black'
    }

    return (
        <div className={theme === 'dark' ? css.searchPageLight : css.searchPageDark}>
            <div className={css.formWrap}>
                    <BadgeInputTitleComponent handleSubmit={handleSubmit} submit={submit} register={register}/>
                <div>
                    {errors.title&& <div><BadgeErrorComponent/></div>}
                </div>
            </div>
            {yourSearch!==''&&
            <div className={css.badgeWrap}>
                <div className={css.badgeResult}><BadgePaperComponent data={`Results for : `} height={40} color={color}
                                                                      width={250}/></div>
                <div className={css.badgeResultData}><BadgePaperComponent data={yourSearch} height={40} color={color}
                                                                      width={650}/></div>
            </div>}

            <div className={css.findMoviesWrap}>
                {yourSearch!==''&&moviesSearch.map(search_=><MovieFromListComponent movie={search_} key={search_.id}/>)}
            </div>
        </div>

    );
};

export default SearchComponent;