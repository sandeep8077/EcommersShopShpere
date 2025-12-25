import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../features/products/productSeletor";
import { useDeferredValue, useEffect, useState } from "react";
import { fetchAsyncProducts } from "../features/products/productSlice";
import { Link } from "react-router-dom";

function Products() {
  const [search, setSearch] = useState("");
  const deferredValue = useDeferredValue(search);

  const { items, isLoading, error } = useSelector(productSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(deferredValue.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Products
        </h1>

        {/* Search */}
        <div className="mb-6">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Search Products
          </label>

          <input
            id="search"
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg
                       focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {search !== deferredValue && (
            <p className="mt-2 text-sm text-blue-600">
              Searching...
            </p>
          )}
        </div>

        {/* Loading / Error */}
        {isLoading && <p className="text-lg text-gray-600">Loading...</p>}
        {error && <p className="text-red-600 font-medium">{error}</p>}

        {/* Products Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <li
              key={item.id}
              className="bg-white p-5 rounded-xl shadow
                         hover:shadow-lg transition"
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
                <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                  {item.title}
                </h2>

                {/* Price */}
                <p className="text-green-600 font-bold">
                  ${item.price}
                </p>

              </Link>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {!isLoading && filteredProducts.length === 0 && (
          <p className="text-gray-500 mt-6">
            No products found.
          </p>
        )}

      </div>
    </div>
  );
}

export default Products;
