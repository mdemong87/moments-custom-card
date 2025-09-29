'use client';

import Loading from '@/app/componnent/Loading';
import useCartStore from '@/store/useCartStore';
import ImageLinkMaker from '@/utilis/helper/ImageLinkMaker';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCart = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { addToCart, cart, removeFromCart } = useCartStore();



    console.log(cart);







    // ✅ Demo Cart Data
    const [myCart, setMyCart] = useState([
        {
            id: 1,
            allinfo: {
                title: 'Wedding Photography',
                fullname: 'John Doe',
                eventtype: 'Wedding',
                image: 'https://via.placeholder.com/150'
            },
            price: 120
        },
        {
            id: 2,
            allinfo: {
                title: 'Birthday Photography',
                fullname: 'Jane Smith',
                eventtype: 'Birthday',
                image: 'https://via.placeholder.com/150'
            },
            price: 90
        }
    ]);

    // ✅ Total Price Calculation
    const totalPrice = myCart.reduce((total, item) => total + Math.round(item.price), 0);

    // ✅ Remove Item
    const removeItem = (index) => {
        const updatedCart = [...myCart];
        updatedCart.splice(index, 1);
        setMyCart(updatedCart);
        toast.success('Item removed successfully!');
    };

    // ✅ Checkout Function (Demo)
    const handleCheckout = async () => {
        if (!myCart.length) {
            toast.error('Cart is empty!');
            return;
        }
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success('Checkout successful! Redirecting...');
        }, 1500);
    };

    return (
        <main className="py-14 pb-20 bg-gray-50 h-fit">
            {isLoading && <Loading />}
            <div className="container mx-auto px-4">
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
                                    key={index}
                                    className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4"
                                >
                                    <Image
                                        src={ImageLinkMaker(item?.productImage)}
                                        alt="Item"
                                        width={80}
                                        height={80}
                                        className="rounded-md object-cover"
                                    />
                                    <div className="flex-1 min-w-[200px]">
                                        <p className="text-gray-700 font-semibold">{item?.productName}</p>
                                    </div>
                                    <div className='flex gap-6'>
                                        <p className="text-lg font-semibold text-gray-800">
                                            {item.productQuantity}</p>
                                        <p className="text-lg font-semibold text-gray-800">${item.productUnitPrice}</p>
                                        <p className="text-lg font-semibold text-gray-800">${item.productQuantity * item.productUnitPrice}.00</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item?.productId)}
                                        className="bg-red-500 hover:bg-red-600 p-2 rounded-md text-white cursor-pointer"
                                    >
                                        <RxCross2 className="text-xl" />
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
                                <p className="text-sm text-gray-700">
                                    <b className="text-red-600">Important:</b> After successful payment, you will see a
                                    Download button for your purchases.
                                </p>
                            </div>

                            <div className="border-b py-2 flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${totalPrice}.00</span>
                            </div>
                            <div className="border-b py-2 flex justify-between text-gray-600">
                                <span>Discount</span>
                                <span>$0.00</span>
                            </div>
                            <div className="py-2 flex justify-between text-lg font-bold text-gray-800">
                                <span>Total</span>
                                <span>${totalPrice}.00</span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="mt-6 bg-sky-400 hover:bg-green-600 text-white font-bold text-lg py-3 rounded-md transition"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>

            <ToastContainer autoClose={2000} />
        </main>
    );
};

export default MyCart;
