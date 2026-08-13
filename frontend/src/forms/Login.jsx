import { useState } from "react";

function Login() {
    const [namemail, setNamemail] = useState("");
    const [password, setPassword] = useState("");

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
        } catch (err) {
            console.log(err.response);
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