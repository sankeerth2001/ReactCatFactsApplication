import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "../pages/HomePage";


export function PublicRoutes(){

    return (
        <Routes>
            <Route index element = {<HomePage/>}/>
            <Route path="/home" element = {<HomePage/>}/>
        </Routes>
    );
}