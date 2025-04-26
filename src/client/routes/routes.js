import { Home } from "../components/pages/Home.js";
import { Dashboard } from "../components/pages/Dashboard.js";
import PageNotFound from "../components/pages/PageNotFound.js";

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
        path: "*",
        component: PageNotFound
    }
];

export default routes;
