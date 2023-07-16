import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { remove } from '../store/userSlice';

function Logout() {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const logout = () => {
        localStorage.removeItem("token");
        dispatch(remove());
        navigate("/");
    }
    const userData=useSelector(state=>state.user);

    return (userData.fullName) ?
        (<Link onClick={logout} ><span className='hover:text-cyan-500 text-xl duration-500 mx-4 my-4 md:mx-6 md:my:0' >Logout</span></Link>)
        : <Link className={`hover:text-cyan-500 text-xl duration-500 mx-4 my-4 md:mx-6 md:my:0`} to="/register">Signup/Login</Link>
}

export default Logout