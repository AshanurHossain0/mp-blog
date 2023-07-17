import React,{useState} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profileValidate } from '../scripts/validate';
import { updateProfile } from '../scripts/api';

function Profile() {

  const navigate = useNavigate();
  const userData = useSelector(state => state.user);
  if (!userData.fullName) navigate("/login");

  const email=userData.email;
  const [fullName,setFullName]=useState(userData.fullName);
  const [city,setCity]=useState(userData.city);
  const [update,setUpdate]=useState(false);
  const updateNow=(e)=>{
    e.preventDefault();
    if(!update){
      setUpdate(true);
      toast.info("rewrite the fields");
      return;
    }
    if(!profileValidate({fullName,city})) return;
    updateProfile({fullName,city})
    .then((res)=>{
      setUpdate(false);
      toast.success("Profile successfully updated");
    })
    .catch((err)=>{
      toast.error(err.message);
      setUpdate(false);
    })
  }

  return (
    <div className='w-full h-auto flex justify-center'>
      <div className=' w-full m-2  md:w-1/2 h-auto md:m-6 shadow-lg bg-indigo-50'>
        <div className='m-6 md:my-8 mx-2 flex justify-center text-2xl md:text-3xl font-semibold text-indigo-600'>
          <p>Profile Details</p>
        </div>
        <form onSubmit={(e)=>updateNow(e)} className='m-1 md:m-2 flex flex-col justify-center items-center p-1'>
          <div className='w-11/12 flex flex-wrap justify-start items-center'>
            <span className='w-[30%] m-2 p-1  my-1 md:my-2 text-lg md:text-xl'>Full Name</span><input value={fullName} onChange={(e)=>{setFullName(e.target.value)}} readOnly={!update} className='outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 text-lg md:text-xl w-auto' type="text"  autoComplete="off" />
          </div>
          <div className='w-11/12 flex flex-wrap justify-start items-center'>
            <span className='w-[30%] m-2 p-1  my-1 md:my-2 text-lg md:text-xl'>City Name</span> <input value={city} onChange={(e)=>{setCity(e.target.value)}} readOnly={!update} className='outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 text-lg md:text-xl w-auto' type="text" autoComplete="off" />
          </div>
          <div className='w-11/12 flex flex-wrap justify-start items-center'>
            <span className='w-[30%] m-2 p-1  my-1 md:my-2 text-lg md:text-xl'>Email Id</span> <input value={email}  readOnly={true} className={`outline-0 border-slate-600 border-b-[1px] p-1  my-1 md:my-2 text-lg md:text-xl w-auto ${update?'bg-red-50':''}`} type="text" autoComplete="off" />
          </div>
          <div className='mt-6 md:mt-8 mx-2 flex flex-col items-center'>
            <button type='submit' className='w-64 p-1 md:p-2 text-lg md:text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 m-1 md:m-2'>{update?"Update Now":"Want to update ?"}</button>
          </div>
        </form>
      </div>
      <ToastContainer theme="colored" />
    </div>
  )
}

export default Profile