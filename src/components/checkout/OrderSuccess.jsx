import { useDispatch } from "react-redux";
import { resetCheckout } from "../../features/checkout/checkoutSlice";
import { clearCart } from "../../features/cart/cartSlice";

function OrderSuccess() {
  const dispatch = useDispatch();

  const handleShopping = () => {
    dispatch(clearCart());
    dispatch(resetCheckout());
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white border rounded-xl shadow-md p-8 text-center max-w-md w-full">

        {/* Success Icon */}
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be
          delivered soon.
        </p>

        {/* Button */}
        <button
          onClick={handleShopping}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
