import { useSelector } from "react-redux";
import Address from "../components/checkout/Address";
import OrderSuccess from "../components/checkout/OrderSuccess";
import Payment from "../components/checkout/Payment";
import Review from "../components/checkout/Review";

function Checkout() {
  const step = useSelector((state) => state.checkout.step);

  const steps = [
    { id: 1, label: "Address" },
    { id: 2, label: "Payment" },
    { id: 3, label: "Review" },
    { id: 4, label: "Success" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Checkout
        </h1>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((item, index) => (
            <div key={item.id} className="flex-1 flex flex-col items-center relative">

              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
                ${
                  step >= item.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {item.id}
              </div>

              {/* Label */}
              <span className="text-sm mt-2 text-gray-700">
                {item.label}
              </span>

              {/* Line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-1 bg-gray-300 -z-10">
                  <div
                    className={`h-1 ${
                      step > item.id ? "bg-green-600" : "bg-gray-300"
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="border rounded-lg p-4 bg-gray-50">
          {step === 1 && <Address />}
          {step === 2 && <Payment />}
          {step === 3 && <Review />}
          {step === 4 && <OrderSuccess />}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
