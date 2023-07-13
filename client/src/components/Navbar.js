import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {

  const [toggle, setToggle] = useState("hidden")

  return (
    <nav className='bg-white h-auto md:h-16  flex flex-col md:flex-row md:items-center md:justify-between w-full border border-indigo-200 border-b-2'>
      <div className=' h-14 flex items-center justify-between mx-4 '>
        <span className=' text-2xl font-sans font-bold text-red-600'>
          MP-Blog
        </span>
        <div className='md:hidden hover:cursor-pointer' onClick={() => { (toggle) ? setToggle("") : setToggle("hidden") }}>
          {
            (!toggle) ? <span className='text-2xl'>&#x2716;</span> : <span className='text-3xl font-bold'>&#9776;</span>
          }
        </div>
      </div>

      <div className={'flex flex-col items-start md:flex-row md:items-center font-mono md:block ' + toggle} >
        <Link className='hover:text-cyan-500 text-xl duration-500 mx-4 my-4 md:mx-6 md:my:0' to="/">Home</Link>
        <Link className='hover:text-cyan-500 text-xl duration-500 mx-4 my-4 md:mx-6 md:my:0' to="/about">About</Link>

        <Logout/>
        

      </div>
    </nav>
  )
}

export default Navbar