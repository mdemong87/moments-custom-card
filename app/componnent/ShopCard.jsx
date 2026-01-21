"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import SpinLoader from "./SpingLoader";

export default function ShopCard({ product }) {
  const [btnLoading, setBtnLoading] = useState(false);
  const router = useRouter();

  if (!product) {
    return (
      <article className="w-full bg-white rounded-2xl shadow-lg p-4 text-center text-gray-500">
        Product data unavailable
      </article>
    );
  }
  const resolveImageSrc = (image) => {
    if (!image || typeof image !== "string") {
      return "/placeholder-product.jpg";
    }

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    if (image.startsWith("uploads") || image.startsWith("storage")) {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${image}`;
    }

    if (image.startsWith("/")) {
      return image;
    }

    return "/placeholder-product.jpg";
  };

  const imageSrc = resolveImageSrc(product.image);

  /**
   * ==========================
   * PRICE LOGIC
   * ==========================
   */
  const displayPrice = parseFloat(
    product.price || product.final_price || 0
  ).toFixed(2);

  const hasOffer = parseFloat(product.offer_price || 0) > 0;
  const offerPrice = hasOffer
    ? parseFloat(product.offer_price).toFixed(2)
    : null;

  /**
   * ==========================
   * BADGE LOGIC
   * ==========================
   */
  const isSpecial =
    product.type === "customizable" || product.type === "trading";

  const badgeText = isSpecial ? "Customizable" : "Simple";

  /**
   * ==========================
   * NAVIGATION
   * ==========================
   */
  const gotoLink = (e, link) => {
    e.preventDefault();
    setBtnLoading(true);

    setTimeout(() => {
      setBtnLoading(false);
      router.push(link);
    }, 800);
  };

  return (
    <article className="group w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100">
        <Image
          src={imageSrc}
          width={1000}
          height={1000}
          draggable={false}
          alt={product.name || "Product image"}
          title={product.name || "Product"}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          unoptimized
          onError={() =>
            console.error("❌ Image failed to load:", imageSrc)
          }
        />

        {/* ================= BADGE ================= */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
              isSpecial
                ? "bg-white/95 text-indigo-700"
                : "bg-white/90 text-gray-700"
            }`}
          >
            {isSpecial && <BsStars className="text-sky-400 text-lg" />}
            {badgeText}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
          {product.name || "Unnamed Product"}
        </h3>

        {/* ================= PRICE ================= */}
        <div className="flex items-baseline gap-3">
          <span className="text-xl font-bold text-gray-900">
            ${displayPrice}
          </span>
          {hasOffer && (
            <span className="text-sm text-gray-500 line-through">
              ${offerPrice}
            </span>
          )}
        </div>

        {/* ================= ACTION ================= */}
        <button
          onClick={(e) => gotoLink(e, `/shop/${product.slug || ""}`)}
          disabled={btnLoading || !product.slug}
          className={`
            w-full flex items-center justify-center gap-2 
            py-3 px-6 rounded-xl font-semibold text-white
            transition-all duration-200
            ${
              btnLoading
                ? "bg-sky-400 cursor-wait"
                : "bg-sky-500 hover:bg-sky-600 active:bg-sky-700"
            }
            disabled:opacity-60 disabled:cursor-not-allowed
            shadow-md hover:shadow-lg
          `}
        >
          {btnLoading && <SpinLoader size={18} />}
          Explore Card
        </button>
      </div>
    </article>
  );
}
