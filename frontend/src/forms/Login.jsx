import axios from "../api/axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [namemail, setNamemail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const loginData = {
            namemail: namemail,
            password: password,
        };

        console.log("LOG IN");
        console.log("Email or username: " + namemail);
        console.log("Password: " + password);
        console.log("loginData: ");
        console.log(loginData);

        try {
            await axios.get("/sanctum/csrf-cookie");
            const res = await axios.post('/login', loginData);

            if (res.data.stat) {
                console.log("Stat true");
                console.log(res.data.message);

                login(res.data.user);
                navigate("/home");
            } else {
                console.log("stat false but not catched error");
            }
        } catch (error) {
            console.log(error.response);
            console.log(error.response.statusText + ": " + error.response.data.message);
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        name="namemail"
                        type="text"
                        placeholder="Email or username..."
                        value={namemail}
                        onChange={(e) => setNamemail(e.target.value)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn btn-success">
                        Log in
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;