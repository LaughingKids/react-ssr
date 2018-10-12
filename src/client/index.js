import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import Routes from "../core/Routes";

const App = () => {
    return (
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
    );
};

const mountPoint = document.getElementById("root");

ReactDom.hydrate(<App/>, mountPoint);