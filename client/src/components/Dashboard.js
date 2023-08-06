import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (

    <div className="bg-slate-700 p-4">
      <div className='grid gap-4 md:grid-cols-2'>
        <div className=''>
          <div class='m-2'>
            <Link to="/user/post-blog" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl bg-blue-200 hover:bg-blue-300 p-4">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=600" alt="blogs" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Post Blog</h5>
                <p className="mb-3 font-normal text-slate-900">Post your amazing blog</p>
              </div>
            </Link>
          </div>
          <div class='m-2'>
            <Link to="" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl bg-blue-200 hover:bg-blue-300 p-4">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600" alt="find-blogs" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Blogs</h5>
                <p className="mb-3 font-normal text-slate-900">See our important blogs</p>
              </div>
            </Link>
          </div>
          <div class='m-2'>
            <Link to="" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl bg-blue-200 hover:bg-blue-300 p-4">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/1089164/pexels-photo-1089164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="blogs" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Your Blogs</h5>
                <p className="mb-3 font-normal text-slate-900">See how peoples are loving your blogs</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='hidden md:block'>
          <img className='h-[300px] md:h-[550px] w-full object-cover' src="https://images.pexels.com/photos/2804851/pexels-photo-2804851.jpeg?auto=compress&cs=tinysrgb&w=600" alt="poster" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard