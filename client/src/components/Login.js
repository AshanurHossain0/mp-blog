import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const navigate=useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    console.log(email,pass);
  }

  return (
    <div className='w-full h-auto flex justify-center'>
      <div className=' w-1/2 h-auto my-20 shadow-lg bg-indigo-50'>
        <div  className=' my-8 mx-2 flex justify-center text-3xl font-semibold text-indigo-600'>
          <p>Welcome Again</p>
        </div>
        <form  className=' m-2 flex flex-col justify-center'>
          <input onChange={(e)=>{setEmail(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-2 my-2 mx-4 text-xl' type="text" placeholder='Enter your email'  autoComplete="off" />
          <input onChange={(e)=>{setPass(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-2 my-2 mx-4 text-xl' type="password" placeholder='Enter your password'  autoComplete="off" />
        </form>
        <div  className=' my-8 mx-2 flex flex-col items-center'>
          <button onClick={submit} className='w-64 p-2 text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600  m-2'>Login</button>
          <p className='my-2'>Don't have any account? <span onClick={()=>{navigate("/register")}} className='text-blue-600 hover:text-blue-700 hover:cursor-pointer'>register now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login