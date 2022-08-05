import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom'

import {HeaderComponent} from "../../components";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices";


const MainLayout = () => {
    const {state} = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieInfo(state));
    }, [state, dispatch])


    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;