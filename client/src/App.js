
import React from 'react'
import { Route,BrowserRouter,Routes } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user' element={<PrivateRoute/>}>
            <Route path="dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </div>     
    </BrowserRouter>
  );
}

export default App;
