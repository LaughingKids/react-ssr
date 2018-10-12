import React from "react";
import express from "express";
import {renderToString} from "react-dom/server";
import Home from "./containers/Home/Home";

const app = express();

app.get("/",function(req,res) {
    const componentString = renderToString(<Home/>);
    res.send ( componentString );
});

const server = app.listen(3000);