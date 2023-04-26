import * as React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Login from '../pages/Login';
export default function MRoutes () {
    return (
        <Routes>
        
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" elemet={<Login/>} >
        
        </Route>
       
       </Routes>
    );
}