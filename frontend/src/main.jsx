import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrialComponent from "./trials/TrialComponent.jsx";
import Register from "./forms/Register.jsx";
import Login from "./forms/Login.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/trials" element={<TrialComponent />} />
            </Routes>
        </StrictMode>
    </BrowserRouter>
)