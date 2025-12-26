import { useDispatch } from "react-redux";
import { goBack, setPayment } from "../../features/checkout/checkoutSlice";

function Payment() {
  const dispatch = useDispatch();

  const handlePayment = (mode) => {
    dispatch(setPayment({ mode }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Select Payment Method
      </h2>

      <div className="bg-white border rounded-lg p-6 shadow-sm space-y-4">
        
        {/* Payment Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* COD */}
          <button
            onClick={() => handlePayment("COD")}
            className="border rounded-lg p-4 text-left hover:border-green-600 hover:bg-green-50 transition"
          >
            <h3 className="font-semibold text-gray-800">Cash on Delivery</h3>
            <p className="text-sm text-gray-500">
              Pay when your order arrives
            </p>
          </button>

          {/* Card */}
          <button
            onClick={() => handlePayment("CARD")}
            className="border rounded-lg p-4 text-left hover:border-green-600 hover:bg-green-50 transition"
          >
            <h3 className="font-semibold text-gray-800">Debit / Credit Card</h3>
            <p className="text-sm text-gray-500">
              Visa, MasterCard, Rupay
            </p>
          </button>

          {/* UPI */}
          <button
            onClick={() => handlePayment("UPI")}
            className="border rounded-lg p-4 text-left hover:border-green-600 hover:bg-green-50 transition"
          >
            <h3 className="font-semibold text-gray-800">UPI</h3>
            <p className="text-sm text-gray-500">
              Google Pay, PhonePe, Paytm
            </p>
          </button>
        </div>

        {/* Footer buttons */}
        <div className="flex justify-between pt-4">
          <button
            onClick={() => dispatch(goBack())}
            className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            ← Back
          </button>

          <span className="text-sm text-gray-500 self-center">
            Choose a payment option to continue
          </span>
        </div>
      </div>
    </div>
  );
}

export default Payment;
