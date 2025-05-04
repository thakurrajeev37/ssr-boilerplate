import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../../client/components/App";
import { Provider } from 'mobx-react';
import rootstore from '../../store';
import layoutFunction from "../layout"

export function renderer (req, res) {
    const context = {};
    const { counterStore } = rootstore || {};
    counterStore.setCount(4);
    const markup = renderToString(
        <Provider rootstore={rootstore}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );
    return {
        html: layoutFunction(markup, rootstore)
    };
}

export default { renderer };