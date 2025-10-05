"use client";

import SpinLoader from "@/app/componnent/SpingLoader";
import { useState } from "react";

export default function CheckoutPage() {

  const [loading, setloading] = useState(false);
  const [cartItems] = useState([
    { id: 1, name: "Product One", price: 50, qty: 2 },
    { id: 2, name: "Product Two", price: 30, qty: 1 },
  ]);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleCheckout = (e) => {
    e.preventDefault();

    setloading(true);



    setTimeout(() => {
      alert(`Order placed with ${paymentMethod.toUpperCase()} 🚀`);
      setloading(false);
    }, 3000);

  };

  return (
    <section className="min-h-[80vh] relative bg-gray-50 py-0 overflow-hidden">

      {/* Glassy blurred background for the entire section */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-3xl -z-20"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-4">

        {/* Checkout Form */}
        <form
          onSubmit={handleCheckout}
          className="col-span-2 bg-white/30 backdrop-blur-lg border border border-gray-200 rounded-lg shadow-lg p-10 space-y-8"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">Checkout</h2>
          <p className="text-sm text-gray-700">Fill in your billing & shipping details.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" placeholder="Full Name" className={inputStyle} required />
            <input type="email" placeholder="Email Address" className={inputStyle} required />
            <input type="text" placeholder="Phone Number" className={inputStyle} required />
            <input type="text" placeholder="City" className={inputStyle} required />
          </div>
          <textarea placeholder="Shipping Address" className={inputStyle} rows="3" required></textarea>

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
            type="submit"
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
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} <span className="text-sm">(x{item.qty})</span>
                  </span>
                  <span>${item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            <hr className="my-6 border-t border-gray-700" />
            <div className="flex justify-between mb-2 text-gray-800">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-800">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4 text-gray-800">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const inputStyle =
  "border border-gray/80 bg-white/70 text-gray-900 placeholder-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 p-3 rounded-xl w-full outline-none transition";
