"use client";

import SingleProductSkeleton from "@/app/componnent/skelaton/SingleProductSkeleton";
import SpinLoader from "@/app/componnent/SpingLoader";
import ViewCart from "@/app/componnent/ViewCart";
import useCartStore from "@/store/useCartStore";
import generateUserId from "@/utilis/helper/generateUserId";
import MakeGet from "@/utilis/requestrespose/get";
import MakePost from "@/utilis/requestrespose/post";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";

/* =========================
   IMAGE URL RESOLVER
========================= */
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

const SingleProduct = () => {
  const { slug } = useParams();
  const router = useRouter();

  const [fetchloading, setfetchloading] = useState(true);
  const [data, setdata] = useState(null);
  const [btnLoading, setbtnLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [modelopen, setmodelopen] = useState(false);
  const [SubcriptionModal, setSubcriptionModal] = useState(false);
  const [subemail, setsubemail] = useState("");
  const [subcribeloading, setsubcribeloading] = useState(false);

  const { addToCart } = useCartStore();

  /* =========================
     FETCH PRODUCT
  ========================= */
  const fetching = useCallback(async (slug) => {
    try {
      const response = await MakeGet(`api/shop/${slug}`);
      setdata(response?.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setfetchloading(false);
    }
  }, []);

  useEffect(() => {
    fetching(slug);
  }, [slug, fetching]);

 /* =========================
   ADD TO CART - FIXED
  ========================= */
  const handleaddToCart = (e) => {
    e.preventDefault();
    setbtnLoading(true);

    setTimeout(() => {
      if (data?.status) {
        const product = {
          id: data?.id, // ✅ Use the actual database product ID (33, 34, or 35)
          productId: data?.id, // ✅ Also store it here for checkout
          productSlug: data?.slug,
          productName: data?.name,
          productType: data?.type,
          productUnitPrice:
            data?.offer_price > 0 ? data?.offer_price : data?.price,
          productQuantity: 1,
          productImage: data?.image,
          productDescription: data?.description,
          FinalProduct: data?.images,
        };

        console.log('✅ Adding product to cart:', {
          id: product.id,
          productId: product.productId,
          name: product.productName
        });

        addToCart(product);
        toast.success('Product added to cart!');
      } else {
        setSubcriptionModal(true);
      }

      setbtnLoading(false);
    }, 1000);
  };

  /* =========================
     CUSTOMIZABLE NAVIGATION
  ========================= */
  const handleaddToCustomizable = (e, type, slug) => {
    e.preventDefault();
    setbtnLoading(true);

    setTimeout(() => {
      setbtnLoading(false);

      if (!data?.status) {
        setSubcriptionModal(true);
        return;
      }

      if (type === "customizable") {
        router.push(`/application/deckcard/${slug}`);
      } else {
        router.push(`/application/tradingcard/${slug}`);
      }
    }, 1000);
  };

  /* =========================
     SUBSCRIBE
  ========================= */
  const subcribes = async (e) => {
    e.preventDefault();

    if (!subemail) {
      toast.warn("Email is required");
      return;
    }

    setsubcribeloading(true);
    const res = await MakePost("api/subscribers", { email: subemail });
    setsubcribeloading(false);

    if (res?.success) {
      setSubcriptionModal(false);
      toast.success("Thank you for subscribing!");
    } else {
      toast.error("Something went wrong. Try again.");
    }
  };

  if (fetchloading) return <SingleProductSkeleton />;

  return (
    <div className="w-full max-w-7xl mx-auto my-8 border border-gray-200 rounded-lg relative bg-white">
      {/* HEADER */}
      <div className="sticky top-[70px] bg-white p-4 border-b flex justify-between">
        <Link
          href="/shop"
          className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaArrowLeft /> Back
        </Link>
        <ViewCart />
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-8 text-gray-700">
        {/* MAIN IMAGE */}
        <div className="col-span-2 flex justify-center">
          <Image
            src={resolveImageSrc(data?.image)}
            alt="Product Image"
            width={300}
            height={350}
            className="rounded-lg border bg-gray-100"
            unoptimized
          />
        </div>

        {/* INFO */}
        <div className="col-span-3 space-y-3">
          <p><strong>Name:</strong> {data?.name}</p>
          <p><strong>Type:</strong> {data?.type}</p>
          <p><strong>Price:</strong> ${data?.price}</p>
          <p><strong>Offer Price:</strong> ${data?.offer_price}</p>
          <p><strong>Status:</strong> {data?.status ? "Published" : "Draft"}</p>
          <p><strong>Category:</strong> {data?.category?.name}</p>

          <button
            onClick={(e) =>
              data?.type === "customizable" || data?.type === "trading"
                ? handleaddToCustomizable(e, data?.type, data?.slug)
                : handleaddToCart(e)
            }
            disabled={btnLoading}
            className="mt-4 bg-sky-500 text-white px-6 py-2 rounded-md flex items-center gap-2"
          >
            {btnLoading ? (
              <SpinLoader />
            ) : data?.type === "customizable" ? (
              <BsStars />
            ) : (
              <FiShoppingCart />
            )}
            {data?.type === "customizable" || data?.type === "trading"
              ? "Customize"
              : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* GALLERY */}
      <div className="flex gap-4 px-8 pb-6">
        {data?.gallery_images?.map((img, idx) => (
          <Image
            key={idx}
            src={resolveImageSrc(img?.url)}
            alt={`Gallery ${idx}`}
            width={70}
            height={80}
            className="rounded-md cursor-pointer border"
            onClick={() => {
              setCurrentIndex(idx + 1);
              setmodelopen(true);
            }}
            unoptimized
          />
        ))}
      </div>

      {/* MODAL */}
      {modelopen && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg">
            <RxCross2
              onClick={() => setmodelopen(false)}
              className="absolute -top-3 -right-3 bg-sky-500 text-white rounded-full p-1 cursor-pointer"
              size={28}
            />

            {data?.gallery_images?.map(
              (img, idx) =>
                currentIndex - 1 === idx && (
                  <Image
                    key={idx}
                    src={resolveImageSrc(img?.url)}
                    alt="Preview"
                    width={350}
                    height={400}
                    className="object-contain"
                    unoptimized
                  />
                )
            )}
          </div>
        </div>
      )}

      {/* SUBSCRIBE MODAL */}
      {SubcriptionModal && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md relative">
            <ImCross
              onClick={() => setSubcriptionModal(false)}
              className="absolute -top-3 -right-3 cursor-pointer"
            />
            <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
            <input
              type="email"
              value={subemail}
              onChange={(e) => setsubemail(e.target.value)}
              className="border p-2 rounded w-full mb-3"
              placeholder="Your email"
            />
            <button
              onClick={subcribes}
              className="bg-sky-500 text-white px-4 py-2 rounded w-full"
            >
              {subcribeloading ? <SpinLoader /> : "Subscribe"}
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default SingleProduct;
