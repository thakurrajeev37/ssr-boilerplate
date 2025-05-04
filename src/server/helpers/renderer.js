import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../../client/components/App";
import layoutFunction from "../layout"

export function renderer (req, res) {
    const context = {};
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    return {
        html: layoutFunction(markup)
    };
}

export default { renderer };