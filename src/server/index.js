import React from "react";
import express from "express";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routes from "../core/Routes";

const app = express();
app.use(express.static("public"));

app.get("/",function(req,res) {
    const content = renderToString((
        <StaticRouter context={{}} location={req.url}>
            {Routes}
        </StaticRouter>
    ));

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