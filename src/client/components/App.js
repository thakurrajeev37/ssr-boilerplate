import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Organisms/NavBar.js";
import routes from "../routes/routes.js";


const App = () => {
    return (
       <>
            {/* <NavBar /> */}

          <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
            </Routes>
       </>
    );
} 

export default App;