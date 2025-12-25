import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../features/products/productSeletor";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { selectCartItems } from "../features/cart/cartSelector";

function ProductDetails() {
  const { items } = useSelector(productSelector);
  const { id } = useParams();
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const product = items.find(
    (item) => item.id === Number(id)
  );

  // Safety check (very important)
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Product not found.</p>
      </div>
    );
  }

  // check product is in cart alrady 
   const isInCart = cartItems.some((item)=>item.id === product.id)


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        {/* Back link */}
        <Link
          to="/products"
          className="text-blue-600 text-sm hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 object-contain"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>

            <p className="text-gray-600 mb-4">
              {product.description}
            </p>

            <p className="text-xl font-semibold text-green-600 mb-6">
              ₹{product.price}
            </p>

            {!isInCart ?
           (  <button
              className="px-6 py-2 bg-blue-600 text-white font-semibold
                         rounded-lg hover:bg-blue-700 transition"
              onClick={()=>dispatch(addToCart(product))}
            >
              Add to Cart
            </button> )
            :( <button
                onClick={() => dispatch(removeToCart(product.id))}
                className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold
                           rounded-lg cursor-not-allowed"
              >
                Added to Cart
              </button>)}
           
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
