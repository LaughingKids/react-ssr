import React from "react";
import express from "express";
import {renderToString} from "react-dom/server";
import Home from "../App/containers/Home/Home";

const app = express();
app.use(express.static("public"));
const content = renderToString(<Home/>);

app.get("/",function(req,res) {
    res.send ( `
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="index.js"></script>   
            </body>
        </html>
    ` );
});

const server = app.listen(3000);