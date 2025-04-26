
export default function requestContextBuilder (req, res, next) {
    if (req.method === "GET" &&
        (req.path.startsWith("/build/js")
    )) {
            return next();
        }
        return next();
};
