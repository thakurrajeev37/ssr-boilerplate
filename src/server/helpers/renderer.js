import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../../client/components/App";
import layoutFunction from "../layout"

export function renderer (req, res) {
    const context = {};
    const initialMarkup = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    res.send(layoutFunction({
        initialMarkup: initialMarkup
    }));
}

export default { renderer };