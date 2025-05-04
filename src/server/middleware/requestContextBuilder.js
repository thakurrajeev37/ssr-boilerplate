
export default function requestContextBuilder (req, res, next) {
    if (req.method === "GET" &&
        (req.path.startsWith("/build/js") &&
        req.url === "/favicon.ico"
    )) {
            return next();
        }
        return next();
};
