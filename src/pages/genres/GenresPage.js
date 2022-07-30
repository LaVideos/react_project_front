import React from 'react';
import {Outlet} from 'react-router-dom'

import {GenresComponent} from "../../components";

const GenresPage = () => {
    return (
        <div>
            <GenresComponent/>
            <Outlet/>
        </div>
    );
};

export default GenresPage;