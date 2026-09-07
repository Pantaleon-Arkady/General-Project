import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const NewAuthContext = createContext(null);

export function NewAuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const register = async (data) => {
        try {
            await axios.get("/sanctum/csrf-cookie");

            const res = await axios.post("/register", data);

            if (res.data.stat) {
                const userData = res.data.user;

                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
            }

            return res;
        } catch (error) {
            throw error;
        }
    };

    const login = async (data) => {
        try {
            await axios.get("/sanctum/csrf-cookie");

            const res = await axios.post("/login", data);

            if (res.data.stat) {
                const userData = res.data.user;

                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
            }

            return res;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await axios.post(
                "/logout",
                {},
                { withCredentials: true }
            );
        } catch (error) {
            console.error("Logout API failed:", error);
        }

        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <NewAuthContext.Provider
            value={{
                user,
                loading,
                register,
                login,
                logout
            }}
        >
            {children}
        </NewAuthContext.Provider>
    );
}

export const useAuth = () => useContext(NewAuthContext);