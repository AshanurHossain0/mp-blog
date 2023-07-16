import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const register = async (info) => {
    const config = {
        headers: { "Content-Type": "application/json" },
    }
    const body = JSON.stringify(info);
    try {
        const res = await axios.post(`http://localhost:3001/register`, body, config)
        return res;
    }
    catch (err) {
        throw new Error(err.response.data.msg);
    }
}
export const login = async (info) => {
    const config = {
        headers: { "Content-Type": "application/json" },
    }
    const body = JSON.stringify(info);
    try {
        const res = await axios.post(`http://localhost:3001/login`, body, config)
        return res;
    }
    catch (err) {
        throw new Error(err.response.data.msg);
    }
}