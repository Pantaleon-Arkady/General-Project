import axios from "../api/axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { register } from "../services/AuthService";

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

        const res = await register(registrationData);

        console.log(res);

        if (res.data.stat) {
            console.log("Res Stat is true");
            login(res.data.user);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="auth_form_element">
                <input
                    name="username"
                    type="text"
                    placeholder="Create your username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="auth_input_elements"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth_input_elements"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Create a password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth_input_elements"
                />

                <br />
                <button className="btn btn-success">
                    Register
                </button>
            </form>
        </>
    )
}

export default Register;