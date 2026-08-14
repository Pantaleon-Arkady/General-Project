import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from './context/AuthContext';

function App() {
    const location = useLocation();
    const [isRegister, setIsRegister] = useState(false);

    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [user])
    
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
