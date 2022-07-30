import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css'

const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <div className={css.link}>
                <NavLink to={'movies'}>Movies</NavLink>

                <NavLink to={'genres'}>Genres</NavLink>
            </div>
            <div className={css.logo}><div>NETFLIX-DNO</div></div>
        </div>
    );
};

export default HeaderComponent;