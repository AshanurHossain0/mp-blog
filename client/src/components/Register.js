import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { regValidate } from '../scripts/validate';
import { register } from '../scripts/api';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!regValidate({ title, fullName, city, email, pass, pass2 })) return;
    
    toast.promise(
      register({ title, fullName, city, email, password: pass }),
      {
        pending: {
          render() {
            return "Processing..."
          },
          icon: false,
        },
        success: {
          render({ data }) {
            setEmail(""); setPass(""); setPass2(""); setFullName(""); setTitle(""); setCity("");
            localStorage.setItem('email', email);
            localStorage.setItem('msg', 'Check email for otp');
            navigate("/verify");
          },
          icon: "🟢",
        },
        error: {
          render({ data }) {
            return <p>{data.message}</p>
          }
        }
      }
    )
  }


  return (
    <div className='w-full h-auto flex justify-center'>
      <div className=' w-full m-2  md:w-1/2 h-auto md:m-6 shadow-xl bg-indigo-50'>
        <div className='m-6 md:my-8 mx-2 flex justify-center text-2xl md:text-3xl font-semibold text-indigo-600'>
          <p>Welcome Dear</p>
        </div>
        <form onSubmit={(e) => { submit(e) }} className='m-1 md:m-2 flex flex-col justify-center'>
          <div className='flex mx-2 md:mx-4 '>
            <div className='m-2 flex'>
              <p className='p-1 text-lg md:text-xl'>Mr</p>
              <input value='Mr' checked={title === "Mr"} name='gender' type='radio' onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className='m-2 flex'>
              <p className='p-1 text-lg md:text-xl'>Miss</p>
              <input value="Miss" checked={title === "Miss"} name='gender' type='radio' onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className='m-2 flex'>
              <p className='p-1 text-lg md:text-xl'>Mrs</p>
              <input value='Mrs' checked={title === "Mrs"} name='gender' type='radio' onChange={(e) => setTitle(e.target.value)}></input>
            </div>
          </div>
          <input value={fullName} onChange={(e) => { setFullName(e.target.value) }} className='outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="text" placeholder='Enter your full name' autoComplete="off" />
          <input value={city} onChange={(e) => { setCity(e.target.value) }} className='outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="text" placeholder='Enter your city name' autoComplete="off" />
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="text" placeholder='Enter your email' autoComplete="off" />
          <input value={pass} onChange={(e) => { setPass(e.target.value) }} className='outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="password" placeholder='Enter password' autoComplete="off" />
          <input value={pass2} onChange={(e) => { setPass2(e.target.value) }} className='outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="password" placeholder='Confirm password' autoComplete="off" />
          <div className='mt-6 md:mt-8 mx-2 flex flex-col items-center'>
            <button type='submit' className='w-64 p-1 md:p-2 text-lg md:text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 m-1 md:m-2'>Register Now</button>
            <p className='mb-1 md:mb-2 text-sm md:text-lg'>Already have an account? <span onClick={() => { navigate("/login") }} className='text-blue-600 hover:text-blue-700 hover:cursor-pointer'>login now</span></p>
          </div>
        </form>
      </div>
      <ToastContainer theme="colored" />
    </div>
  )
}

export default Register