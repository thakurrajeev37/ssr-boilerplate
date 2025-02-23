import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Organisms/NavBar.js";
import uiRoutes from "../routes/uiRoutes.js";
import { Home } from "./pages/Home.js";


const App = () => {
    return (
       <>
            <NavBar />

          <Routes>
                {
                    uiRoutes.map(({path, component}) => {
                        <Route path element={<component/>}/>
                    })
                }
                <Route path="/home" element={<Home/>}/>
            </Routes>
       </>
    );
} 

export default App;