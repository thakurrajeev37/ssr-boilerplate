import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../../client/components/App";
import { Provider } from 'mobx-react';
import rootstore from '../../client/store';
import layoutFunction from "../layout"
import { dehydrateRootStore } from "../../client/store/hydration";

export function renderer (req, res) {
    const { counterStore, todoStore } = rootstore || {};
    const todos = [{ text: "Clean the room", completed: false, id: Date.now() }];
    todoStore.todos = todos;
    counterStore.count = 5;
    const dehydratedRootStore = dehydrateRootStore({todos: todos});
    const markup = renderToString(
        <Provider rootstore={rootstore}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    );
    return {
        html: layoutFunction(markup, dehydratedRootStore)
    };
}

export default { renderer };