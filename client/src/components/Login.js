import React,{useEffect, useState} from 'react';
import { useNavigate,Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginValidate } from '../scripts/validate';
import { login } from '../scripts/api';
import { useDispatch } from 'react-redux/es/exports';
import { add } from '../store/userSlice';

const Login = () => {
  const userData=useSelector(state=>state.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");

  useEffect(()=>{
    if(localStorage.getItem("msg")) toast.success("otp verification successfull");
    localStorage.removeItem("msg");
  },[])

  
  const submit=async (e)=>{
    e.preventDefault();
    if( ! loginValidate({email,pass})) return;
    login({email,password:pass})
    .then((res)=>{
      setEmail("");setPass("");
      localStorage.setItem("token",res.data.token);
      dispatch(add({fullName:res.data.data.fullName,userId:res.data.data._id,city:res.data.data.city,email:res.data.data.email}));
    })
    .catch((err)=>{
      toast.error(err.message);
      setEmail("");setPass("");
    })
  }

  return ((!userData.fullName) && (!localStorage.getItem("token")))?
  (
    <div className='w-full h-auto flex justify-center poster3'>
      <div className=' w-full m-6 md:m-0 md:w-1/2 h-auto md:my-20 '>
        <div  className='m-6 md:my-8 mx-2 flex justify-center text-2xl md:text-3xl font-semibold text-indigo-600'>
          <p>Happy to see you</p>
        </div>
        <form onSubmit={(e)=>{submit(e)}}  className='m-1 md:m-2 flex flex-col justify-center'>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl bg-transparent' type="text" placeholder='Enter your email'  autoComplete="off" />
          <input value={pass} onChange={(e)=>{setPass(e.target.value)}} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl bg-transparent' type="password" placeholder='Enter your password'  autoComplete="off" />
          <div  className='mt-6 md:mt-8 mx-2 flex flex-col items-center'>
            <button type='submit' className='w-64 p-1 md:p-2 text-lg md:text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 m-1 md:m-2'>Login</button>
            <p className='m-1 md:my-2 text-sm md:text-lg'>Don't have any account? <span onClick={()=>{navigate("/register")}} className='text-blue-600 hover:text-blue-700 hover:cursor-pointer'>register now</span></p>
          </div>
        </form>
      </div>
      <ToastContainer theme="colored"/>
    </div>
  ):
  <Navigate to="/user/dashboard" />
}

export default Login