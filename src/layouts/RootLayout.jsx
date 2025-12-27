import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { totalItems } from "../features/cart/cartSelector";
import Notification from "../components/noticatoin/Notification";

function RootLayout() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const cartItemsCount = useSelector(totalItems);
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
          <Link to="/" className="text-xl font-bold text-blue-600">
            ShopSphere
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/products" className="nav-link">
              Products
            </Link>

            {/* Cart with Badge */}
            <Link
              to="/cart"
              className="relative text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Cart
              {cartItemsCount > 0 && (
                <span
                  className="absolute -top-2 -right-4 bg-blue-600 text-white
                             text-xs font-bold rounded-full px-2 py-0.5"
                >
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <Link to="/orders" className="nav-link">
              Orders
            </Link>

            <Link to="/admin" className="nav-link">
              Admin
            </Link>

            <Link to="/checkout" className="nav-link">
              Checkout
            </Link>

             <Link to="/wishlist" className="nav-link">
              wishList
            </Link>

            {/* Auth Action */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 text-sm font-semibold text-white
                           bg-red-500 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1.5 text-sm font-semibold text-white
                           bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4">
        <Notification/>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
