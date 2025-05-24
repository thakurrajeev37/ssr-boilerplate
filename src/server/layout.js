import serialize from "serialize-javascript";

export default function layoutFunction(markup, initialStore) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SSR demo</title>
                <link rel="stylesheet" href="./index.css">
            </head>
            <body>
                <div id="root">${markup}</div>
                <script>window.__INITIAL_STATE__ = ${serialize(initialStore, { isJSON: true })}</script>
                <script type="text/javascript" src="./index.js"></script>
            </body>
        </html>
    `
}