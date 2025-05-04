import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App.js';
import { BrowserRouter } from 'react-router';
import { Provider } from 'mobx-react';
import rootstore from '../store';

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
