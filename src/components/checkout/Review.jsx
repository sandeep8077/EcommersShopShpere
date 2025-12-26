import { useDispatch, useSelector } from "react-redux";
import { goBack, placeOrder } from "../../features/checkout/checkoutSlice";

function Review() {
  const dispatch = useDispatch();

  const address = useSelector((state) => state.checkout.address);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Review Your Order
      </h2>

      <div className="bg-white border rounded-lg p-6 shadow-sm space-y-6">

        {/* Address Section */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">
            Shipping Details
          </h3>

          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-1">
            <p><span className="font-medium">Name:</span> {address.name}</p>
            <p><span className="font-medium">City:</span> {address.city}</p>
            <p><span className="font-medium">Address:</span> {address.address}</p>
            <p><span className="font-medium">Email:</span> {address.email}</p>
            <p><span className="font-medium">Pin:</span> {address.pinCode}</p>
          </div>
        </div>

        {/* Cart Items */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">
            Order Items
          </h3>

          <div className="divide-y border rounded-md">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <button
            onClick={() => dispatch(goBack())}
            className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            ← Back
          </button>

          <button
            onClick={() => dispatch(placeOrder(true))}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
