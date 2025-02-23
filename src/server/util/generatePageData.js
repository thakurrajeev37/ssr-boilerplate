import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../../client/components/App";

export function generatePageData (req, res) {
    const context = {};
    const initialMarkup = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    return ({
        initialMarkup
    });
}

export default { generatePageData };