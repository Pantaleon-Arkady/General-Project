import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Register from './forms/Register';
import { useEffect, useState } from 'react';

function App() {
    const location = useLocation();
    const [isRegister, setIsRegister] = useState(false);
    
    useEffect(() => {
        if (location.pathname === "/register") {
            setIsRegister(true)
        }
    }, [location.pathname])

    return (
        <>
            <div className="app_main_div h-100 w-100 bg-white">
                <div className="h-100 border border-2 rounded bg-light p-3">
                    <div>
                        Current Location: {location.pathname}
                    </div>
                    <Outlet />
                    <div className='border rounded'>
                        {location.pathname === "/login" || "/" ? "Register ?" : "Login ?" }<br />
                        {isRegister ? "Login ?" : "Register ?"}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
