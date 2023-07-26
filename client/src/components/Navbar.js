import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {

  const [toggle, setToggle] = useState("hidden");
  const userData=useSelector(state=>state.user);

  return (
    <nav className='bg-white h-auto md:h-20  flex flex-col md:flex-row md:items-center md:justify-between w-full border border-indigo-200 border-b-2'>
      <div className=' h-14 flex items-center justify-between mx-4 '>
        <span className=' text-2xl  font-bold text-red-600 font-bungee'>
          MP-Blog
        </span>
        <div className='md:hidden hover:cursor-pointer' onClick={() => { (toggle) ? setToggle("") : setToggle("hidden") }}>
          {
            (!toggle) ? <span className='text-2xl'>&#x2716;</span> : <span className='text-3xl font-bold'>&#9776;</span>
          }
        </div>
      </div>

      <div className={'flex flex-col items-start md:flex-row md:items-center font-ubuntu md:block ' + toggle} >
        <Link className='hover:text-cyan-500 text-xl duration-500 mx-4 my-2 md:mx-6 md:my:0' onClick={()=>{setToggle("hidden")}} to="/">Home</Link>
        <Link className='hover:text-cyan-500 text-xl duration-500 mx-4 my-2 md:mx-6 md:my:0' onClick={()=>{setToggle("hidden")}} to="/user/dashboard">Dashboard</Link>
        <Link className='hover:text-cyan-500 text-xl duration-500 mx-4 my-2 md:mx-6 md:my:0' onClick={()=>{setToggle("hidden")}} to="/about">About</Link>
        <Logout />
        {
          (userData.fullName)?
          <Link className='hover:text-cyan-500 text-xl duration-500 mx-4 my-4 md:mx-6 md:my:0' onClick={()=>{setToggle("hidden")}} to="/user/profile">{userData.fullName.split(" ")[0]}</Link>
          :<></>
        }
      </div>
      
    </nav>
  )
}

export default Navbar