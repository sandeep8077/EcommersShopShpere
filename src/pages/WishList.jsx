import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function WishList() {
  const wishLists = useSelector((state) => state.wishlist.items);

  // Empty state
  if (wishLists.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Your wishlist is empty 💔
          </h1>
          <p className="text-gray-500">
            Add some products to see them here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Your Wishlist
        </h1>

        {/* Wishlist Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishLists.map((item) => (
            <li
            
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
                <Link to={`/products/${item.id}`}>
              {/* Image */}
              <div className="h-48 flex items-center justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
                {item.title}
              </h2>

              {/* Price */}
              <p className="text-green-600 font-bold mt-1">
                ₹{item.price}
              </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WishList;
