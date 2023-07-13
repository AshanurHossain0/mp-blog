import React from 'react'
import {Link} from 'react-router-dom'

function Logout() {

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    }

    return (localStorage.getItem("userId")) ?
        (<Link onClick={logout} ><span className='hover:text-cyan-500 text-xl duration-500 mx-4 my-4 md:mx-6 md:my:0' >Logout</span></Link>)
        : <Link className={`hover:text-cyan-500 text-xl duration-500 mx-4 my-4 md:mx-6 md:my:0`} to="/register">Signup/Login</Link>
}

export default Logout