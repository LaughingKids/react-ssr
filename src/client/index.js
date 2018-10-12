import React from "react";
import ReactDom from "react-dom";

import Home from "../App/containers/Home/Home";

const mountPoint = document.getElementById("root");

ReactDom.hydrate(<Home/>, mountPoint);