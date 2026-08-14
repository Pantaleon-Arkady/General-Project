import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import NavButtons from "../components/NavButtons";

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
            <div className="w-100 vh-100 home_main_div">
                <div className="border rounded w-100 h-100">
                    <div className="home_page_nav">
                        <div className="heading nav_left">
                            Home Page
                        </div>

                        <NavButtons />

                        <div className="nav_right">
                            <button
                                onClick={() => handleLogout()}
                                className="btn btn-danger justify-self-end"
                            >
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;