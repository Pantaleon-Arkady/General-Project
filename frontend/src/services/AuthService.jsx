import axios from "../api/axios";

export const register = async (data) => {
    try {
        await axios.get("/sanctum/csrf-cookie");

        const res = await axios.post('/register', data);

        return res;

    } catch (err) {
        console.log(err.response);
    }
}

export const loginService = async (data) => {
    try {
        await axios.get("/sanctum/csrf-cookie");

        const res = await axios.post('/login', data);

        return res;
    } catch (err) {
        console.log(err.response);
    }
}