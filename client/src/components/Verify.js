import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { verifyOtp, resendOtp } from '../scripts/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Verify() {
    const [timeLeft, setTimeLeft] = useState(152);
    const [otp, setOtp] = useState("");

    useEffect(() => {
        if (timeLeft === 0) {
            setTimeLeft(null)
        }

        if (!timeLeft) return;

        const intervalId = setInterval(() => {

            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);



    const submit = async (e) => {
        e.preventDefault();
        toast.promise(
            verifyOtp({otp}),
            {
              pending: {
                render(){
                  return "Verifying..."
                },
                icon: false,
              },
              success: {
                render({data}){
                  localStorage.setItem("msg","Verified successfully");
                  return <Navigate to="/login" >verified</Navigate>
                },
                icon: "🟢",
              },
              error: {
                render({data}){
                  return <p>{data.message}</p>
                }
              }
            }
        )
    }

if(!localStorage.getItem("email") ||  (!timeLeft)) return <Navigate to="/login" />
return (
    <div className='w-full h-auto flex justify-center'>
        <div className=' w-full m-6 md:m-0 md:w-1/2 h-auto md:my-20 shadow-lg bg-indigo-50'>
            <div className='m-6 md:my-8 mx-2 flex justify-center text-2xl md:text-3xl font-semibold text-indigo-600'>
                <p>Verify Your Email</p>
            </div>
            <form onSubmit={(e) => { submit(e) }} className='m-1 md:m-2 flex flex-col justify-center'>
                <input value={otp} onChange={(e) => { setOtp(e.target.value) }} className='outline-0 border-slate-600 border-b-[1px] p-1 md:p-2 my-1 md:my-2 mx-2 md:mx-4 text-lg md:text-xl' type="text" placeholder='Enter OTP' autoComplete="off" />
                <div className='mt-6 md:mt-8 mx-2 flex flex-col items-center'>
                    <button type='submit' className='w-64 p-1 md:p-2 text-lg md:text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 m-1 md:m-2'>Verify otp</button>
                    {(timeLeft-2>0) ? <p>{timeLeft-2} second</p> : <p className='text-red-500' >Time up</p>}
                </div>
            </form>
        </div>
        <ToastContainer theme="colored" />
    </div>
)
}

export default Verify