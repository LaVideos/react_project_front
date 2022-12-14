import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();

root.render(
    <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
    </Provider>
);


