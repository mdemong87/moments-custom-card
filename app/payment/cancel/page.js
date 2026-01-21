"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentCancel() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-8">
          Your payment was cancelled. No charges were made to your account.
          Your cart items are still saved.
        </p>

        <div className="space-y-4">
          <Link 
            href="/checkout"
            className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Return to Checkout
          </Link>
          
          <Link 
            href="/shop"
            className="block w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            Continue Shopping
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact Support</Link>
        </p>
      </div>
    </div>
  );
}