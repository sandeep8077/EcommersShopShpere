import { useDispatch } from "react-redux";
import { logginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = {
      id: 1,
      name: "Sandeep Kumar",
      role: "admin",
    };

    dispatch(logginSuccess(user));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to ShopSphere
        </h1>

        {/* Info */}
        <p className="text-sm text-gray-500 text-center mb-6">
          Click login to continue
        </p>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg
                     hover:bg-blue-700 active:scale-[0.98] transition duration-200"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;
