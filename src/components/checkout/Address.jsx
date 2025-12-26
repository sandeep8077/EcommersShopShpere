import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "../../features/checkout/checkoutSlice";

function Address() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddressValue] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPin] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      address,
      city,
      pinCode,
    };

    dispatch(setAddress(formData));

    setName("");
    setEmail("");
    setAddressValue("");
    setCity("");
    setPin("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Shipping Address
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-sm border space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              value={address}
              type="text"
              onChange={(e) => setAddressValue(e.target.value)}
              placeholder="House no, street, area"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pin Code
            </label>
            <input
              value={pinCode}
              type="text"
              onChange={(e) => setPin(e.target.value)}
              placeholder="Postal Code"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Continue →
          </button>
        </div>
      </form>
    </div>
  );
}

export default Address;
