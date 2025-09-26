"use client";

import { BsStars } from "react-icons/bs";

export default function ShopCard({
    product = {},
    onAddToCart = () => { },
    onCustomize = () => alert("Customize"),
}) {
    // Handle badges
    const badges = [...(product.badges || [])];
    if (product.type && !badges.includes("Customizable")) {
        badges.push("Customizable");
    }

    return (
        <article className="max-w-xs w-full bg-white rounded-2xl shadow-lg overflow-hidden transform transition">
            {/* Product Image */}
            <div className="relative h-60 w-full overflow-hidden group">
                <img
                    draggable={false}
                    title={product.name}
                    src={product.image || product.main_image || ""}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {/* Other badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {(() => {
                        const displayBadge = product.customizable ? "Customizable" : "Simple";
                        return (
                            <span
                                className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-gray-800 shadow-md flex items-center gap-1"
                            >
                                {product.customizable && <BsStars className="text-sky-400 text-lg" />}
                                {displayBadge}
                            </span>
                        );
                    })()}
                </div>

            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-3">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                        {product.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">
                                ${parseFloat(product.price || product.final_price || 0).toFixed(2)}
                            </span>
                            {parseFloat(product.offer_price) > 0 && (
                                <span className="text-xs line-through text-gray-400">
                                    ${parseFloat(product.offer_price).toFixed(2)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                    {product.customizable ? (
                        <button
                            onClick={() => onCustomize(product)}
                            className="flex-1 inline-flex justify-center items-center gap-2 rounded-md bg-sky-500 text-white py-2 px-4 text-sm font-semibold shadow-lg hover:brightness-105 active:scale-95 transition cursor-pointer"
                        >
                            Customize
                        </button>
                    ) : (
                        <button
                            onClick={() => onAddToCart(product)}
                            className="flex-1 inline-flex justify-center items-center gap-2 rounded-md bg-sky-500 text-white py-2 px-4 text-sm font-semibold shadow-lg hover:brightness-105 active:scale-95 transition cursor-pointer"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}







