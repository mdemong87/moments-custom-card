'use client';

import CheckoutAuth from '@/app/componnent/CheckoutAuth';
import SpinLoader from '@/app/componnent/SpingLoader';
import useCartStore from '@/store/useCartStore';
import useLogedUserStore from '@/store/useLogedUser';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ImNotification } from "react-icons/im";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyCart() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();
    const { loginUser } = useLogedUserStore();
    
    // Resolve image URL
    const resolveImageSrc = (image) => {
        if (!image || typeof image !== "string") {
            return "/placeholder-product.jpg";
        }
        
        // Absolute URL
        if (image.startsWith("http://") || image.startsWith("https://")) {
            return image;
        }
        
        // Laravel storage path
        if (image.startsWith("storage/")) {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            if (!baseUrl) {
                console.error("❌ NEXT_PUBLIC_API_BASE_URL missing");
                return "/placeholder-product.jpg";
            }
            return `${baseUrl}/${image}`;
        }
        
        // Public folder image
        if (image.startsWith("/")) {
            return image;
        }
        
        return "/placeholder-product.jpg";
    };
    
    // Calculate total price
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (Number(item.productUnitPrice) * Number(item.productQuantity)), 0);
    };

    // Checkout Function
    const handleCheckout = async () => {
        if (!cart.length) {
            toast.warn('Cart is empty!');
            return;
        }
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            router.push('my-cart/checkout');
        }, 900);
    };

    return (
        <main className="py-14 pb-20 bg-gray-50 min-h-[60vh] h-fit">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-12 gap-6">
                    {/* Cart Items Section */}
                    <div className="bg-white rounded-xl shadow-md col-span-12 lg:col-span-8 p-6">
                        <div className="flex justify-between items-center border-b pb-3 mb-4">
                            <div className="flex gap-4 items-center">
                                <button
                                    onClick={() => router.back()}
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-lg p-2 cursor-pointer"
                                >
                                    <IoMdArrowRoundBack className="text-xl" />
                                </button>
                                <h3 className="text-2xl font-semibold text-gray-800">Shopping Cart</h3>
                            </div>
                            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
                                Total Items: <b>{cart.length}</b>
                            </div>
                        </div>

                        {/* Cart Items */}
                        {cart.length > 0 ? (
                            cart?.map((item, index) => (
                                <div
                                    key={item?.id || index}
                                    className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4"
                                >
                                    {item?.productImage ? (
                                        <Image
                                            src={resolveImageSrc(item.productImage)}
                                            alt={item?.productName || "Product"}
                                            width={80}
                                            height={80}
                                            className="rounded-md object-cover"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="w-20 h-20 bg-gray-300 rounded-md flex items-center justify-center text-gray-500 text-xs">
                                            No Image
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-[200px]">
                                        <p className="text-gray-700 font-semibold">{item?.productName}</p>
                                        <p className="text-gray-500">{item?.productType}</p>
                                    </div>
                                    <div className='flex flex-col md:flex-row items-center gap-6'>
                                        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-md p-1 w-fit">
                                            {/* Decrease Button */}
                                            <button
                                                onClick={() => decreaseQuantity(item?.id)}
                                                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 text-2xl font-bold text-gray-600 cursor-pointer transition"
                                            >
                                                -
                                            </button>

                                            {/* Quantity Display */}
                                            <span className="min-w-[22px] text-center text-xl font-semibold text-gray-800 select-none">
                                                {item.productQuantity}
                                            </span>

                                            {/* Increase Button */}
                                            <button
                                                onClick={() => increaseQuantity(item?.id)}
                                                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 text-2xl font-bold text-gray-600 transition cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className='bg-white border border-gray-200 rounded-md p-1 text-lg px-2 text-black flex items-center gap-2'>
                                            <div className="bg-gray-100 rounded-md p-1 text-lg px-2 text-black">
                                                ${Number(item.productUnitPrice).toFixed(2)}
                                            </div>
                                            <div className="bg-gray-100 rounded-md p-1 text-lg px-2 text-black">
                                                ${(Number(item.productQuantity) * Number(item.productUnitPrice)).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item?.id)}
                                        className="bg-red-500 hover:bg-red-600 p-2 rounded-md text-white cursor-pointer"
                                    >
                                        <RxCross2 className="text-2xl" />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 py-6">Your cart is empty.</p>
                        )}

                        <div className="text-right mt-4">
                            <Link href={'/shop'}
                                className="underline text-gray-600 hover:text-gray-800"
                            >
                                Keep Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Order Summary Section */}
                    <div className="col-span-12 lg:col-span-4 bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
                            <div className="bg-red-50 border border-red-200 p-3 rounded-md mb-6">
                                <p className="text-sm text-gray-700 flex items-center gap-2">
                                    <ImNotification className='text-5xl text-red-300' />
                                    <span className='text-gray-500'>
                                        <b className="text-red-300">Important:</b> After successful Order, We will Contact with you very Soon.
                                    </span>
                                </p>
                            </div>

                            <div className="border-b py-2 flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${calculateTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="border-b py-2 flex justify-between text-gray-600">
                                <span>Discount</span>
                                <span>$0.00</span>
                            </div>
                            <div className="py-2 flex justify-between text-lg font-bold text-gray-800">
                                <span>Total</span>
                                <span>${calculateTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            disabled={isLoading || cart.length === 0}
                            className="mt-6 bg-sky-400 hover:bg-sky-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-lg py-3 rounded-md transition flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {isLoading && <SpinLoader />}
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />

            {!loginUser?.token && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000096] pb-10 z-[90]'>
                    <div className='shadow-2xl w-fit h-fit'>
                        <CheckoutAuth />
                    </div>
                </div>
            )}
        </main>
    );
};