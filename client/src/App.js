
import React,{useEffect} from 'react'
import { Route,BrowserRouter,Routes} from "react-router-dom";
import './App.css';
import { loadUser } from './scripts/script';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { add } from './store/userSlice';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import About from './components/About';
import Profile from './components/Profile';
import Verify from './components/Verify';

function App() {
  const dispatch=useDispatch();
  let token=localStorage.getItem("token");
  useEffect(()=>{
    loadUser(token)
    .then((res)=>{
      dispatch(add({fullName:res.data.data.fullName,email:res.data.data.email,userId:res.data.data._id,city:res.data.data.city}))
    })
    .catch((err)=>{
      localStorage.removeItem("token");
    })
  },[])

  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user' element={<PrivateRoute/>}>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="profile" element={<Profile/>} />
          </Route>
        </Routes>
      </div>     
    </BrowserRouter>
  );
}

export default App;
