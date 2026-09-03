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