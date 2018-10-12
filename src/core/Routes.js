import React from "react";
import {Route} from "react-router-dom";
import Home from "../App/containers/Home/Home";

export default (
    <div>
        <Route path={"/"} exact component={Home}/>
    </div>
);