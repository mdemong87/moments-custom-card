"use client";

import SpinLoader from "@/app/componnent/SpingLoader";
import useCartStore from "@/store/useCartStore";
import getCookie from "@/utilis/helper/cookie/gettooken";
import MakePost from "@/utilis/requestrespose/post";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function CheckoutPage() {


  const token = getCookie();
  const [loading, setloading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [City, setCity] = useState("");
  const [address, setaddress] = useState("");
  const { cart } = useCartStore();



  // calculate the total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.productUnitPrice * item.productQuantity, 0);
  };



  // handle checkout funtionh here
  const handleCheckout = async (e) => {
    e.preventDefault();

    setloading(true);


    const paymentPassingData = {
      paymentMethod,
      name,
      email,
      phone,
      City,
      address,
      roundTotolPrice: calculateTotalPrice()
    }


    if (name && email && phone && City && address) {


      // Send the form data to the server
      const res = await MakePost("api/customer-orders", paymentPassingData, token);

      console.log(res);
      setloading(false);
    } else {
      toast.warn("Required All Feilds");
    }

  };

  return (
    <section className="min-h-[80vh] relative bg-gray-50 py-0 overflow-hidden">
      <ToastContainer />
      {/* Glassy blurred background for the entire section */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-3xl -z-20"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-4">

        {/* Checkout Form */}
        <form
          className="col-span-2 bg-white/30 backdrop-blur-lg border border border-gray-200 rounded-lg shadow-lg p-10 space-y-8"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">Checkout</h2>
          <p className="text-sm text-gray-700">Fill in your billing & shipping details.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Full Name" className={inputStyle} required />
            <input onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Email Address" className={inputStyle} required />
            <input onChange={(e) => { setphone(e.target.value) }} type="text" placeholder="Phone Number" className={inputStyle} required />
            <input onChange={(e) => { setCity(e.target.value) }} type="text" placeholder="City" className={inputStyle} required />
          </div>
          <textarea onChange={(e) => { setaddress(e.target.value) }} placeholder="Shipping Address" className={inputStyle} rows="3" required></textarea>

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Select Payment Method</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div
                onClick={() => setPaymentMethod("cod")}
                className={`cursor-pointer rounded-2xl border-2 p-5 flex flex-col items-center gap-3 transition 
                  ${paymentMethod === "cod" ? "border-blue-400 bg-white/70 shadow-inner shadow-white/30" : "border-white/70 hover:border-blue-400"}`}
              >
                <div className="text-3xl">💵</div>
                <h4 className="font-semibold text-gray-700">Cash on Delivery</h4>
                <p className="text-sm text-gray-600 text-center">Pay with cash when you receive the order.</p>
              </div>
              <div
                onClick={() => setPaymentMethod("stripe")}
                className={`cursor-pointer rounded-2xl border-2 p-5 flex flex-col items-center gap-3 transition 
                  ${paymentMethod === "stripe" ? "border-blue-400 bg-white/70 shadow-inner shadow-white/30" : "border-white/70 hover:border-blue-400"}`}
              >
                <div className="text-3xl">💳</div>
                <h4 className="font-semibold text-gray-700">Credit/Debit Card</h4>
                <p className="text-sm text-gray-600 text-center">Pay securely via Stripe with your card.</p>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => { handleCheckout(e) }}
            className="mt-6 bg-sky-400 text-white px-10 py-4 rounded-lg font-bold shadow-xl hover:opacity-90 transition w-full cursor-pointer flex items-center justify-center gap-4"
          >
            {loading && <SpinLoader />}
            Confirm & Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white/30 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg p-8">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            <ul className="space-y-4 text-gray-700">
              {[].map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span>
                    .. <span className="text-sm">.</span>
                  </span>
                  <span>...</span>
                </li>
              ))}
            </ul>
            <hr className="my-6 border-t border-gray-700" />
            <div className="flex justify-between mb-2 text-gray-800">
              <span>Subtotal</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-800">
              <span>Shipping</span>
              <span>${calculateTotalPrice()}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4 text-gray-800">
              <span>Total</span>
              <span>${calculateTotalPrice()}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const inputStyle =
  "border border-gray/80 bg-white/70 text-gray-900 placeholder-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 p-3 rounded-xl w-full outline-none transition";
