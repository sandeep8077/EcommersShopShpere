function Cart() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Your Cart
        </h1>
        <p className="text-sm text-gray-500">
          Review your items before checkout
        </p>
      </div>

      {/* Cart Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
        
        {/* Empty Cart */}
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            Your cart is empty 🛒
          </p>

          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg
                             hover:bg-blue-700 transition">
            Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
