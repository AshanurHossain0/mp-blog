import axios from 'axios';

export const loadUser = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
    };
    try {
        const res = await axios.get(`https://mp-blog.onrender.com/user`, config);
        return res;
    }
    catch (err) {
        throw new Error(err.response.data.msg);
    }
}