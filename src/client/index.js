import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App.js';
import { BrowserRouter } from 'react-router';
import { Provider } from 'mobx-react';
import Rootstore from './store';
import { hydrateRootStore } from './store/hydration.js';

const rootstore = Rootstore;
hydrateRootStore(rootstore);
hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
        <Provider rootstore={rootstore}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
   
);
