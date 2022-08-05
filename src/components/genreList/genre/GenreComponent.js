import React from 'react';

import css from './Genre.module.css';
import {BadgeLinkComponent} from "../../index";

const GenreComponent = ({genre}) => {
    const {id,name} = genre;
    return (
        <div className={css.genreWrap}>
         <BadgeLinkComponent id={id} name={name}/>
        </div>
    );
};

export default GenreComponent;