import { Home } from "../components/pages/Home.js";
import { Dashboard } from "../components/pages/Dashboard.js";
import PageNotFound from "../components/pages/PageNotFound.js";
import Counter from "../components/pages/Counter.js";

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/counter",
        component: Counter
    },
    {
        path: "*",
        component: PageNotFound
    }
];

export default routes;
