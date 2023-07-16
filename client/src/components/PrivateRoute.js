import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector} from 'react-redux/es/hooks/useSelector';

function PrivateRoute() {
  const userData=useSelector(state=>state.user);
  const auth=userData.fullName;
  return (auth)?<Outlet/>:<Navigate to="/login" />;
}

export default PrivateRoute;