import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, []);

    const handleLogout = async () => {
        await logout();
        navigate("/");
    }

    return (
        <>
            <div>
                Home Page

                <button
                    onClick={() => handleLogout()}
                    className="btn btn-danger"
                >
                    Log out
                </button>
            </div>
        </>
    )
}

export default Home;