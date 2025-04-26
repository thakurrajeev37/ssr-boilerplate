export default function layoutFunction(obj) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SSR demo</title>
                <link rel="stylesheet" href="./index.css">
            <body>
                <div id="root">${obj.initialMarkup}</div>
                <script type="text/javascript" src="./index.js"></script>
            </body>
        </html>
    `
}