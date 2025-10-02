'use client'

import SingleProductSkeleton from "@/app/componnent/skelaton/SingleProductSkeleton ";
import SpinLoader from "@/app/componnent/SpingLoader";
import ViewCart from "@/app/componnent/ViewCart";
import useCartStore from "@/store/useCartStore";
import generateUserId from "@/utilis/helper/generateUserId";
import ImageLinkMaker from "@/utilis/helper/ImageLinkMaker";
import MakeGet from "@/utilis/requestrespose/get";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer } from "react-toastify";



const SingleProduct = () => {



    const { slug } = useParams();
    const router = useRouter();
    const [modelopen, setmodelopen] = useState(false);
    const [fetchloading, setfetchloading] = useState(true);
    const [isedit, setisedit] = useState(false);
    const [name, setname] = useState('');
    const [image, setimage] = useState('');
    const [des, setdes] = useState('');
    const [data, setdata] = useState(null);
    const [btnLoading, setbtnLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addToCart, cart, removeFromCart } = useCartStore();




    const fetching = useCallback(async (slug) => {
        try {
            const response = await MakeGet(`api/shop/${slug}`);

            setdata(response?.data);

            setfetchloading(false);
        } catch (error) {
            console.error("Error fetching All Products:", error);
            setfetchloading(false);
        }
    }, [slug]);


    // Simulate fetching user data
    useEffect(() => {
        fetching(slug);
    }, []);



    // handle add to cart
    const handleaddToCart = (e) => {

        e.preventDefault();
        setbtnLoading(true);

        const product = {
            productId: generateUserId(),
            productSlug: data?.slug,
            productName: data?.name,
            productType: data?.type,
            productUnitPrice: data?.price,
            productQuantity: 1,
            productImage: data?.image,
            productDescription: data?.description,
        };

        setTimeout(() => {
            addToCart(product);
            setbtnLoading(false);
        }, 1000);
    };



    // handle customizatio cart
    const handleaddToCustomizable = (e, type) => {

        e.preventDefault();
        setbtnLoading(true);

        setTimeout(() => {
            setbtnLoading(false);

            if (type == "customizable") {
                router.push('/application/deckcard');
            } else {
                router.push('/application/tradingcard');
            }

        }, 1000);
    }




    if (fetchloading) return <SingleProductSkeleton />


    return (
        <div className="h-fit w-full max-w-7xl mx-auto my-8 mx-8 border border-gray-200 rounded-lg relative">
            <div>
                <div className="pb-8 items-center flex justify-between sticky top-[70px] bg-white py-2 px-5 rounded-lg border">
                    {/* <span className="text-2xl font-bold text-gray-700">Card Overview</span> */}
                    <div className="flex justify-between gap-4 mt-3 w-full">
                        <Link href={'/shop'}
                            className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-sky-300 transition cursor-pointer flex items-center gap-1 justify-center"
                        >
                            <FaArrowLeft />
                            Back
                        </Link>

                        <ViewCart />
                    </div>
                </div>

                <div className="grid bg-white grid-cols-1 md:grid-cols-5 gap-8 px-8 text-gray-700 pb-8 pt-5">

                    <div className="w-full col-span-2 flex justify-center">
                        <Image
                            src={ImageLinkMaker(data?.image)}
                            alt="Thumbnail"
                            width={250}
                            height={300}
                            className="w-auto h-auto rounded-lg bg-gray-200 border border-gray-200 rounded-md"
                        />
                    </div>


                    <div className="space-y-4 col-span-3">
                        <p><strong>Name:</strong> {data?.name}</p>
                        <p><strong>Type:</strong> {data?.type}</p>
                        <p><strong>Price:</strong> ${data?.price}</p>
                        <p><strong>Offer Price:</strong> ${data?.offer_price}</p>
                        <p><strong>Status:</strong> {data?.status ? "Published" : "Draft"}</p>
                        <p><strong>Category:</strong> {data?.category?.name}</p>
                        <p className="line-clamp-2"><strong>Short Description:</strong> {data?.short_description}</p>

                        <div>
                            <button
                                onClick={(e) => { { data?.type === "customizable" || data?.type === "trading" ? handleaddToCustomizable(e, data?.type) : handleaddToCart(e) } }}
                                disabled={btnLoading}
                                className="flex-1 inline-flex justify-center items-center gap-2 rounded-md bg-sky-500 text-white py-2 px-4 text-md font-semibold shadow-lg hover:brightness-105 transition cursor-pointer flex items-center justify-center gap-2"
                            >
                                {
                                    btnLoading ? <SpinLoader /> : data?.type === "customizable" ? <BsStars className="text-white text-xl" /> : <FiShoppingCart className="text-xl text-white" />
                                }
                                {data?.type === "customizable" || data?.type === "trading" ? "Customize" : "Add to Cart"}
                            </button>
                        </div>

                    </div>

                </div>
                <div className="bg-white py-2 pb-6 px-5 rounded-b-lg">
                    <div className="flex flex-wrap gap-4 mt-4">
                        {data?.gallery_images?.map((img, idx) => (
                            <Image
                                onClick={() => { setmodelopen(true), setCurrentIndex(idx + 1) }}
                                key={idx}
                                src={ImageLinkMaker(img?.url)}
                                alt={`Gallery ${idx}`}
                                width={70}
                                height={80}
                                className="rounded-md bg-gray-200 cursor-pointer border border-gray-200"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />

            <div className={`${modelopen ? "block" : "hidden"} text-black w-full h-full absolute top-0 left-0 rounded-lg bg-[#0000009c] select-none`}>
                <div onClick={() => setmodelopen(false)} className="absolute -top-3 -right-3 bg-sky-400 text-whtie w-[35px] h-[35px] rounded-full flex items-center justify-center text-white cursor-pointer border border-sky-400 hover:border hover:border-white transition-all duration-300 ease-in-out hover:rotate-360">
                    <RxCross2 className="text-2xl" />
                </div>

                <div className="absolute -top-3 left-[50%] bg-sky-400 text-whtie rounded-xl flex items-center justify-center text-white cursor-pointer border border-sky-400 hover:border hover:border-white transition-all duration-300 ease-in-out px-1 py-0">
                    {currentIndex}/{data?.gallery_images?.length}
                </div>

                <div className="w-full h-full rounded-lg flex items-center justify-between px-3 py-6 gap-2">
                    <div onClick={() => { currentIndex > 1 && setCurrentIndex(currentIndex - 1) }} className="bg-sky-400 text-whtie w-[35px] h-[35px] rounded-full flex items-center justify-center text-white cursor-pointer">
                        <RiArrowLeftFill className="text-xl" />
                    </div>
                    <div className="w-full h-full rounded-lg flex items-center justify-center">
                        {data?.gallery_images?.map((img, idx) =>
                            currentIndex - 1 === idx && (
                                <Image
                                    key={idx}
                                    src={ImageLinkMaker(img?.url)}
                                    alt={`Gallery ${idx}`}
                                    width={250}
                                    height={300}
                                    className="rounded-md cursor-pointer w-auto h-auto object-contain"
                                />
                            )
                        )}
                    </div>
                    <div onClick={() => { currentIndex < data?.gallery_images?.length && setCurrentIndex(currentIndex + 1) }} className="bg-sky-400 text-whtie w-[35px] h-[35px] rounded-full flex items-center justify-center text-white cursor-pointer">
                        <RiArrowRightFill className="text-xl" />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SingleProduct;


