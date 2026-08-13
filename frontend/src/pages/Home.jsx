import axios from "../api/axios";

function Home() {

    const handleLogout = async () => {
        try {
            await axios.post("/logout", {}, { withCredentials: true });
        } catch (error) {
            console.log(error.response.statusText);
        }
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