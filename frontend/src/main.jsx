
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import App from "./App.jsx";
import TrialComponent from "./trials/TrialComponent.jsx";
import Register from "./forms/Register.jsx";
import Login from "./forms/Login.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <StrictMode>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                    </Route>
                    <Route path='/trials' element={<TrialComponent />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </StrictMode>
        </AuthProvider>
    </BrowserRouter>
)