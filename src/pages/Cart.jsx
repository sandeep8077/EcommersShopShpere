import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  totalItems,
  totalPrice,
} from "../features/cart/cartSelector";
import {
  clearCart,
  decreaseQuantity,
  increateQuantity,
  removeToCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector(selectCartItems);
  const itemsCount = useSelector(totalItems);
  const priceTotal = useSelector(totalPrice);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Your Cart ({itemsCount} items)
        </h1>
        <p className="text-sm text-gray-500">
          Review your items before checkout
        </p>
      </div>

      {/* Cart Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
        
        {/* Empty Cart */}
        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              Your cart is empty 🛒
            </p>
          </div>
        )}

        {/* Cart Items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            {/* Product Info */}
            <div>
            <h4
               className="font-semibold text-gray-800 line-clamp-2 min-h-[3rem]"
                >
                {item.title}
            </h4>


              <p className="text-sm text-gray-500">
                ₹{item.price}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                −
              </button>

              <span className="font-medium">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increateQuantity(item.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Remove Item */}
            <button
              onClick={() => dispatch(removeToCart(item.id))}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Cart Summary */}
        {items.length > 0 && (
          <div className="mt-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">
              Total: ₹{priceTotal.toFixed(2)}
            </h3>

            <div className="flex gap-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="px-5 py-2 border border-red-500 text-red-500
                           rounded-lg hover:bg-red-50 transition"
              >
                Clear Cart
              </button>

              <Link to='/checkout' 
              className="px-6 py-2 bg-blue-600 text-white font-semibold
                           rounded-lg hover:bg-blue-700 transition"
              >Checkout</Link>
                
              
                
              
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;
