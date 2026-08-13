import { Outlet, useLocation, Link } from 'react-router-dom';
import './App.css';
import Register from './forms/Register';
import { useEffect, useState } from 'react';

function App() {
    const location = useLocation();
    const [isRegister, setIsRegister] = useState(false);
    
    useEffect(() => {
        if (location.pathname === "/register") {
            setIsRegister(true)
        } else {
            setIsRegister(false)
        }
    }, [location])

    return (
        <>
            <div className="app_main_div h-100 w-100 bg-white">
                <div className="h-100 border border-2 rounded bg-light p-3">
                    <div>
                        Current Location: {location.pathname}
                    </div>
                    <Outlet />
                    <Link to={`${isRegister ? "/login" : "/register"}`} className='border rounded'>
                        {isRegister ? "Login ?" : "Register ?"}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default App;
