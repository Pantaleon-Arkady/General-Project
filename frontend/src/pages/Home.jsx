import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { logout } = useAuth();

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