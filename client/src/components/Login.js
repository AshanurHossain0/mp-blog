import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginValidate } from '../scripts/validate';

const Login = () => {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const navigate=useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    if( ! loginValidate({email,pass})) return;
    console.log(email,pass);
  }

  return (
    <div className='w-full h-auto flex justify-center'>
      <div className=' w-full m-6 md:m-0 md:w-1/2 h-auto md:my-20 shadow-lg bg-indigo-50'>
        <div  className='m-6 md:my-8 mx-2 flex justify-center text-2xl md:text-3xl font-semibold text-indigo-600'>
          <p>Happy to see you</p>
        </div>
        <form onSubmit={(e)=>{submit(e)}}  className='m-1 md:m-2 flex flex-col justify-center'>
          <input onChange={(e)=>{setEmail(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="text" placeholder='Enter your email'  autoComplete="off" />
          <input onChange={(e)=>{setPass(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="password" placeholder='Enter your password'  autoComplete="off" />
          <div  className='mt-6 md:mt-8 mx-2 flex flex-col items-center'>
            <button type='submit' className='w-64 p-1 md:p-2 text-lg md:text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 m-1 md:m-2'>Login</button>
            <p className='m-1 md:my-2 text-sm md:text-lg'>Don't have any account? <span onClick={()=>{navigate("/register")}} className='text-blue-600 hover:text-blue-700 hover:cursor-pointer'>register now</span></p>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login