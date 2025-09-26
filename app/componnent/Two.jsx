'use client'

import useProductUploadStore from "@/store/useProductUploadStore";
import getCookie from "@/utilis/helper/cookie/gettooken";
import handleFileChange from "@/utilis/helper/handlefilechange";
import handleFileChangeMultipul from "@/utilis/helper/handlefilechangemultipul";
import MakeGet from "@/utilis/requestrespose/get";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer } from "react-toastify";
import SpinLoader from "./SpingLoader";

const Two = () => {

    const token = getCookie();
    const [isLoading, setLoading] = useState(false);
    const [data, setdata] = useState(null);
    const {
        rander, setrander,
        productType, setproductType,
        productName, setproductName,
        productPrice, setproductPrice,
        productDescription, setproductDescription,
        productShortDescription, setproductShortDescription,
        productofferPrice, setproductofferPrice,
        productCategory, setproductCategory,
        productCategoryName, setproductCategoryName,
        productTags, setproductTags,
        productStatus, setproductStatus,
        productThumbnail, setproductThumbnail,
        productSingleImage, setproductSingleImage,
        productImages, setproductImages,
        layerBaseCard, setlayerBaseCard,
        layerSkinTone, setlayerSkinTone,
        layerHair, setlayerHair,
        layerNose, setlayerNose,
        layerEyes, setlayerEyes,
        layerMouth, setlayerMouth,
        layerDress, setlayerDress,
        layerCrown, setlayerCrown,
        layerBeard, setlayerBeard,
    } = useProductUploadStore();


    /************** Fetching all categories ******************/
    const fetching = useCallback(async (token) => {
        try {
            const response = await MakeGet(`api/categories`, token);
            console.log(response);
            setdata(response?.data?.categories);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    }, [token]);


    /*************** run useEffect one time ***************/
    useEffect(() => {
        fetching(token);
    }, [fetching]);




    /************* Handle Preview Image gallery Removed *****************/
    const handleRemove = (index) => {
        // Create a new array without the clicked item
        const updatedImages = productImages?.filter((_, i) => i !== index);
        setproductImages(updatedImages);
    };



    /********** handle next function **********/
    const handleNext = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setrander(3);
        }, 900);
    }



    return (
        <div className="flex justify-center px-2">
            <div className="w-full bg-white rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    <div className="space-y-5 col-span-1 md:col-span-8 border border-gray-300 rounded-md px-4 py-3">

                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 mb-1">Name <span className="text-red-500 text-xl">*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={productName}
                                onChange={(e) => { setproductName(e.target.value) }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>


                        {/* Type */}
                        <div>
                            <label className="block text-gray-700 mb-1">Type <span className="text-red-500 text-xl">*</span></label>
                            <input
                                disabled
                                type="text"
                                name="type"
                                value={productType}
                                onChange={(e) => { e.target.value }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>


                        {/* Price */}
                        <div>
                            <label className="block text-gray-700 mb-1">Price <span className="text-red-500 text-xl">*</span></label>
                            <input
                                type="number"
                                name="price"
                                value={productPrice}
                                onChange={(e) => { setproductPrice(e.target.value) }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
                            />
                        </div>

                        {/* Offer Price */}
                        <div>
                            <label className="block text-gray-700 mb-1">Offer Price</label>
                            <input
                                type="number"
                                name="offer_price"
                                value={productofferPrice}
                                onChange={(e) => { setproductofferPrice(e.target.value) }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-700 mb-1">Category <span className="text-red-500 text-xl">*</span></label>
                            <select
                                name="status"
                                value={productCategory}
                                onChange={(e) => { setproductCategory(e.target.value) }}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value={''}>Select Category</option>
                                {
                                    data?.map((item, index) => {
                                        return (
                                            <option key={index} value={JSON.stringify({ id: item?.id, name: item?.name })}>{item?.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>


                        {/* Status */}
                        <div>
                            <label className="block text-gray-700 mb-1">Status</label>
                            <select
                                name="status"
                                value={productStatus}
                                onChange={(e) => { setproductStatus(e.target.value) }}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value={true}>Publish</option>
                                <option value={false}>Draft</option>
                            </select>
                        </div>


                        {/* Short Description */}
                        <div>
                            <label className="block text-gray-700 mb-1">Short Description <span className="text-red-500 text-xl">*</span></label>
                            <textarea
                                name="short_description"
                                value={productShortDescription}
                                onChange={(e) => { setproductShortDescription(e.target.value) }}
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-700 mb-1">Description</label>
                            <textarea
                                name="description"
                                value={productDescription}
                                onChange={(e) => { setproductDescription(e.target.value) }}
                                rows="5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                        </div>

                    </div>
                    <div className="col-span-1 md:col-span-4">
                        <div className="w-full border border-gray-300 rounded-md px-4 py-3 sticky top-[100px]">
                            <div>
                                <label className="block text-gray-700 mb-1">Product Thumbnail</label>
                                <label htmlFor="thamnail_image">
                                    <div className="w-full h-[180px] bg-gray-100 roundede-md flex items-center justify-center cursor-pointer relative">

                                        {productThumbnail != null ? (
                                            <Image src={productThumbnail} alt="Thumbnail_Image" width={1000} height={1000} className="absloute w-full h-full top-0 left-0 object-cover rounded-md border border-gray-200" />
                                        ) : (
                                            <CiCirclePlus className="text-8xl text-gray-300" />
                                        )}





                                    </div>
                                </label>
                                <input onChange={(e) => { handleFileChange(e, setproductThumbnail) }}
                                    id="thamnail_image"
                                    type="file"
                                    className="hidden"
                                    accept=" image/png, image/jpeg, image/jpg"
                                />

                            </div>

                            <div className="mt-6">
                                <label className="block text-gray-700 mb-1">Image Gallerys:
                                    <span className="px-1 py-0.5 text-sm rounded-md bg-sky-300 text-white">{productImages?.length}</span>
                                </label>

                                <div className="w-full min-h-[220px] max-h-[300px] bg-gray-100 rounded-md p-2 overflow-y-scroll no-scrollbar">


                                    <div className="flex flex-wrap gap-2">
                                        {/* Image Previews */}
                                        {productImages?.map((src, idx) => (
                                            <div key={idx} className="relative w-[65px] h-[65px] border-gray-200 rounded-md">
                                                <Image
                                                    src={src}
                                                    alt={`Preview ${idx}`}
                                                    fill
                                                    className="object-cover rounded-md border-gray-200"
                                                />
                                                <div onClick={() => { handleRemove(idx) }} className="bg-sky-800 text-white w-4 h-4 rounded-full flex items-center justify-center absolute top-0 right-0 cursor-pointer">
                                                    <RxCross2 className="text-whtie text-xs" />
                                                </div>
                                            </div>
                                        ))}


                                        {/* Upload Button */}
                                        <label htmlFor="image_taker">
                                            <div
                                                className="w-[65px] h-[65px] border border-gray-200 rounded-md flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-200 transition"
                                            >
                                                <FaPlus className="text-xl text-gray-500" />
                                            </div>
                                        </label>
                                        <input
                                            onChange={(e) => { handleFileChangeMultipul(e, setproductImages, productImages) }}
                                            id="image_taker"
                                            type="file"
                                            className="hidden"
                                            multiple
                                            accept=" image/png, image/jpeg, image/jpg"

                                        />
                                    </div>





                                </div>
                            </div>



                            {/* Submit */}
                            <div className="flex justify-start gap-3 mt-6">

                                <button onClick={() => { setrander(1) }}
                                    type="submit"
                                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition cursor-pointer"
                                >
                                    Back
                                </button>

                                <button onClick={() => { handleNext() }}
                                    type="submit"
                                    className="bg-sky-400 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition cursor-pointer flex items-center justify-center gap-2"
                                >
                                    {isLoading && <SpinLoader />}
                                    Next
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );


}


export default Two;