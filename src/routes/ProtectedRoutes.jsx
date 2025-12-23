import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function ProtectedRoutes( {children, role}){
const {isAuthenticated , user} = useSelector((state)=>state.auth);
// const navigate = useNavigate()
 
if(!isAuthenticated){
  return <Navigate  to='/login' replace/>
}
if(role && user?.role !== role){
    return <Navigate  to='/' replace/>
}

return children;
}

export default ProtectedRoutes;