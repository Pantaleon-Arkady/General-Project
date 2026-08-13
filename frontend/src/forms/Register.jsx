import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log("Register");
            console.log("Username: " + username);
            console.log("Email: " + email);
            console.log("Password: " + password);
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