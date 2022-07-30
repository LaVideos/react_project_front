import React from 'react';
import {Route, Routes,Navigate} from 'react-router-dom';
import {GenresPage, MovieInfoPage, MoviesListPage} from "./pages";
import MainLayout from "./layouts/mainLayouts/MainLayout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}></Route>
                    <Route path={'/movies'} element = {<MoviesListPage/>}>
                    </Route>
                    <Route path={'/genres'} element = {<GenresPage/>}>
                        <Route path={':id/moviesByGenre'} element = {<MoviesListPage/>}></Route>
                    </Route>
                    <Route path={'/:movieId/movieData'} element={<MovieInfoPage/>}></Route>
                </Route>
            </Routes>

        </div>
    );
};

export default App;