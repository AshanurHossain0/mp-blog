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
export const updateProfile = async (info) => {
    const token=localStorage.getItem("token");
    if(!token) throw new Error("");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
    }
    const body = JSON.stringify(info);
    try {
        const res = await axios.patch(`http://localhost:3001/user`, body, config);
        return res;
    }
    catch (err) {
        throw new Error(err.response.data.msg);
    }
}