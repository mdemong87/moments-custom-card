"use client";
import Image from "next/image";
import { useState } from "react";

export default function CustomerOrders({ }) {

    const [purchases, setpurchases] = useState([]);

    console.log(purchases.length);


    return (
        <section className="p-4">
            <h2 className="text-2xl font-semibold mb-6 brandColor">My Orders</h2>

            {purchases.length === 0 ? (
                <div className="text-gray-400 text-center py-10 bg-gray-200 rounded-xl">
                    You haven’t purchased anything yet.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {purchases.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    Purchased on {new Date(item.date).toLocaleDateString()}
                                </p>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="font-medium text-[var(--brandColor)]">
                                        ${item.price}
                                    </span>
                                    <button className="px-3 py-1.5 text-sm border rounded-lg text-[var(--brandColor)] border-[var(--brandColor)] hover:bg-[var(--brandColor)] hover:text-white transition-all">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
