import './App.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';

import MainLayout from './layout/main-layout';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainHome from "./pages/home/main-home";
import AboutUs from "./pages/about-us/about-us";
import CtalkApp from "./pages/ctalk-app/ctalk-app";
import AppLayout from "./layout/app-layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainHome/>}></Route>
                    <Route path="home" element={<MainHome/>}></Route>
                    <Route path="about-us" element={<AboutUs/>}></Route>
                </Route>
                <Route path="/app" element={<AppLayout/>}>
                    <Route index element={<CtalkApp/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
