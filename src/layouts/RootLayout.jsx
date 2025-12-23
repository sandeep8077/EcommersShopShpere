import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

function RootLayout() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Brand */}
          <Link
            to="/"
            className="text-xl font-bold text-blue-600"
          >
            ShopSphere
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/cart"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Cart
            </Link>

            <Link
              to="/orders"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Orders
            </Link>
                   <Link
              to="/admin"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Admin
            </Link>

                 <Link
              to="/checkout"
              className="text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Checkout
            </Link>

            {/* Auth Action */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1.5 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
