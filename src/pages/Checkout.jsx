function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Checkout
        </h1>
        <p className="text-sm text-gray-500">
          Complete your order securely
        </p>
      </div>

      {/* Checkout Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Shipping / Payment Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Shipping Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
            Payment Method
          </h2>

          <div className="flex gap-4">
            <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100">
              Card
            </button>
            <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100">
              UPI
            </button>
            <button className="flex-1 border rounded-lg py-2 hover:bg-gray-100">
              COD
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Shipping</span>
            <span>₹0</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold text-gray-800">
            <span>Total</span>
            <span>₹0</span>
          </div>

          <button className="w-full mt-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg
                             hover:bg-green-700 transition">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
