import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../src/client/components/App.js';

hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
   
);
