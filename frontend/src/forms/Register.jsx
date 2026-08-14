import axios from "../api/axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const registrationData = {
            username: username,
            email: email,
            password: password
        };

        console.log("Register");
        console.log("Username: " + username);
        console.log("Email: " + email);
        console.log("Password: " + password);

        try {
            await axios.get("/sanctum/csrf-cookie");
            const res = await axios.post('/register', registrationData);
            
            if (res.data.stat) {
                console.log(res.data.message);

                login(res.data.user);
                navigate("/home");
            }

        } catch (err) {
            console.log(err.response);
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        name="username"
                        type="text"
                        placeholder="Create your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Create a password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />
                    <button className="btn btn-success">
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register;