'use client'

import SingleProductSkeleton from "@/app/componnent/skelaton/SingleProductSkeleton ";
import getCookie from "@/utilis/helper/cookie/gettooken";
import MakeDelete from "@/utilis/requestrespose/delete";
import MakeGet from "@/utilis/requestrespose/get";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";



const SingleProduct = () => {



    const { slug } = useParams();
    const router = useRouter();
    const token = getCookie();
    const [fetchloading, setfetchloading] = useState(true);
    const [isedit, setisedit] = useState(false);
    const [name, setname] = useState('');
    const [image, setimage] = useState('');
    const [des, setdes] = useState('');
    const [data, setdata] = useState(null);




    const fetching = useCallback(async (slug, token) => {
        try {
            const response = await MakeGet(`api/products/${slug}`, token);

            setdata(response?.data);

            setfetchloading(false);
        } catch (error) {
            console.error("Error fetching All Products:", error);
            setfetchloading(false);
        }
    }, [slug, token]);


    // Simulate fetching user data
    useEffect(() => {
        fetching(slug, token);
    }, []);


    /************** handle profile update function here` ******************/
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const passdata = {
            name,
            description: des,
            image,
        }


        const response = await MakePost(`api/categories`, passdata, token);

        if (response?.success) {
            toast.success(response?.message);
            setname('');
            setimage('');
            setdes('');
            fetching(id, token);
        } else {
            toast.error('Something went Wrong');
        }

        setLoading(false);

    };






    /*************** handle delete  **************/
    const handleDelect = async (e, id) => {

        e.preventDefault();

        try {
            setfetchloading(true);
            const response = await MakeDelete(`api/products/${id}`, token);


            if (response?.success) {
                router.push('/deshboard/admin/allproducts');
                toast.success(response?.message);
            } else {
                toast.error("Something Went Wrong");
            }

            setfetchloading(false);
        } catch (error) {
            console.error("Error fetching profile:", error);
            setfetchloading(false);
        }
    }


    if (fetchloading) return <SingleProductSkeleton />


    return (
        <div className="">
            <div className="mb-7 items-center flex justify-between sticky top-[70px] bg-white py-4 pt-0">
                <span className="text-2xl font-bold ">Product Overview</span>
                <div className="flex justify-end gap-4 mt-6">
                    <Link href={'/deshboard/admin/allproducts'}
                        className="bg-sky-200 px-4 py-2 rounded-lg hover:bg-sky-300 transition cursor-pointer flex items-center gap-1 justify-center"
                    >
                        <FaArrowLeft />
                        Back
                    </Link>
                    <button
                        onClick={(e) => { handleDelect(e, data?.id) }}
                        className="bg-red-300 text-black px-4 py-2 rounded-lg hover:bg-red-400 transition flex items-center gap-2 justify-center cursor-pointer flex items-center gap-0 justify-center"
                    >

                        Delete
                        <MdDelete className="text-lg" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-4 col-span-3">
                    <p><strong>Name:</strong> {data?.name}</p>
                    <p><strong>Type:</strong> {data?.type}</p>
                    <p><strong>Price:</strong> ${data?.price}</p>
                    <p><strong>Offer Price:</strong> ${data?.offer_price}</p>
                    <p><strong>Status:</strong> {data?.status ? "Published" : "Draft"}</p>
                    <p><strong>Category:</strong> {data?.category?.name}</p>
                    <p><strong>Short Description:</strong> {data?.short_description}</p>
                    <p><strong>Description:</strong> {data?.description}</p>


                    <h3 className="font-bold mt-4 mb-2">Gallery Images</h3>
                    {data?.gallery_images?.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {data?.gallery_images?.map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img?.url}
                                    alt={img?.alt}
                                    width={80}
                                    height={80}
                                    className="rounded-md bg-gray-200"
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No Gallery Images</p>
                    )}



                    {
                        data?.type != 'simple' && (

                            <>


                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Base Cards</h3>
                                    {productImages?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>



                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Skin Tone</h3>
                                    {productImages?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>



                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Hair Layer</h3>
                                    {layerHair?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>



                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Nose Layer</h3>
                                    {layerNose?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>




                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Eyes Layer</h3>
                                    {layerEyes?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>




                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Mouth Layer</h3>
                                    {layerMouth?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>




                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Dress Layer</h3>
                                    {layerDress?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>





                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Crown Layer</h3>
                                    {layerCrown?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>





                                <div className="w-full col-span-4">
                                    <h3 className="font-bold mt-4 mb-2">Beard Layer</h3>
                                    {layerHair?.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {data?.base_cards.map((img, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={img}
                                                    alt={`Gallery ${idx}`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-md border h-[60px] w-[80px]"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p>No Gallery Images</p>
                                    )}
                                </div>



                            </>

                        )

                    }



                </div>

                <div className="w-full col-span-1">


                    <h3 className="font-bold mb-2">Thumbnail</h3>
                    {data?.image ? (
                        <Image
                            src={data?.image}
                            alt="Thumbnail"
                            width={1000}
                            height={1000}
                            className="w-full rounded-md bg-gray-200"
                        />
                    ) : (
                        <p>No Thumbnail</p>
                    )}


                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SingleProduct;