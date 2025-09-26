"use client";
import useLoadingStore from "@/store/useLoadingStore";
import getId from "@/utilis/helper/cookie/getid";
import getCookie from "@/utilis/helper/cookie/gettooken";
import MakeDelete from "@/utilis/requestrespose/delete";
import MakeGet from "@/utilis/requestrespose/get";
import MakePost from "@/utilis/requestrespose/post";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function AllProducts() {

    const id = getId();
    const token = getCookie();
    const { isLoading, setLoading } = useLoadingStore();
    const [fetchloading, setfetchloading] = useState(true);
    const [isedit, setisedit] = useState(false);
    const [name, setname] = useState('');
    const [image, setimage] = useState('');
    const [des, setdes] = useState('');
    const [data, setdata] = useState(null);




    const fetching = useCallback(async (id, token) => {
        try {
            const response = await MakeGet(`api/products`, token);

            setdata(response?.data);

            setfetchloading(false);
        } catch (error) {
            console.error("Error fetching All Products:", error);
            setfetchloading(false);
        }
    }, [id, token]);


    // Simulate fetching user data
    useEffect(() => {
        fetching(id, token);
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
    const handleDelect = async (id) => {
        try {
            setfetchloading(true);
            const response = await MakeDelete(`api/categories/${id}`, token);

            if (response?.success) {
                toast.success(response?.message);
                fetching(id, token);
            } else {
                toast.error("Something Went Wrong");
            }

            setfetchloading(false);
        } catch (error) {
            console.error("Error fetching profile:", error);
            setfetchloading(false);
        }
    }


    console.log(data?.data);



    if (fetchloading) return <SkeletonLoader />


    return (
        <div className="w-full">
            <div className="w-full">

                <div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-left">
                            Added Category : <span>{data?.categories?.length}</span>
                        </h1>
                        <div>
                            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {data?.data?.map((cat, idx) => (
                                    <Link
                                        href={`/deshboard/admin/allproducts/${cat?.slug}`}
                                        key={idx}
                                        className="text-center bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:scale-102 transform transition duration-300 relative"
                                    >
                                        <div className="relative w-full h-56">
                                            <Image
                                                width={1000}
                                                height={1000}
                                                src={cat?.image}
                                                alt={cat?.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold mb-2 text-[#333333] line-clamp-1">{cat?.name}</h3>
                                            <p className="text-gray-600 line-clamp-3">{cat?.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}


























function SkeletonLoader() {
    return (
        <div className="animate-pulse space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 rounded-xl shadow-sm h-80 flex flex-col"
                    >
                        <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                        <div className="p-4 space-y-2">
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}