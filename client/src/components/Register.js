import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { regValidate } from '../scripts/validate';

const Register = () => {
  const navigate=useNavigate()

  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [fullName,setFullName]=useState("");
  const [title,setTitle]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    if( ! regValidate({title,fullName,email,pass})) return;
    console.log(fullName,email,pass,title);
  }


  return (
    <div className='w-full h-auto flex justify-center'>
      <div className=' w-full m-4 md:m-0 md:w-1/2 h-auto md:my-16 shadow-lg bg-indigo-50'>
        <div  className='m-6 md:my-8 mx-2 flex justify-center text-2xl md:text-3xl font-semibold text-indigo-600'>
          <p>Welcome Dear</p>
        </div>
        <form onSubmit={(e)=>{submit(e)}}  className='m-1 md:m-2 flex flex-col justify-center'>
          <div className='flex mx-2 md:mx-4 '>
            <div className='m-2 flex'>
              <p className='p-1 text-lg md:text-xl'>Mr</p>
              <input name='gender'  type='radio' onChange={(e)=>setTitle("Mr")}></input>
            </div>
            <div className='m-2 flex'>
              <p className='p-1 text-lg md:text-xl'>Miss</p>
              <input name='gender' type='radio' onChange={(e)=>setTitle("Miss")}></input>
            </div>
            <div className='m-2 flex'>
              <p className='p-1 text-lg md:text-xl'>Mrs</p>
              <input name='gender' type='radio' onChange={(e)=>setTitle("Mrs")}></input>
            </div>
          </div>
          <input onChange={(e)=>{setFullName(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="text" placeholder='Enter your full name'  autoComplete="off" />
          <input onChange={(e)=>{setEmail(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="text" placeholder='Enter your email'  autoComplete="off" />
          <input onChange={(e)=>{setPass(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="password" placeholder='Enter your password'  autoComplete="off" />
          <div  className='mt-6 md:mt-8 mx-2 flex flex-col items-center'>
            <button type='submit' className='w-64 p-1 md:p-2 text-lg md:text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 m-1 md:m-2'>Register Now</button>
            <p className='m-1 md:my-2 text-sm md:text-lg'>Already have an account? <span onClick={()=>{navigate("/login")}} className='text-blue-600 hover:text-blue-700 hover:cursor-pointer'>login now</span></p>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Register