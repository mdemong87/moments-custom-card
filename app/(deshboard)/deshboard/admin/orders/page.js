'use client'

import SpinLoader from "@/app/componnent/SpingLoader";
import getCookie from "@/utilis/helper/cookie/gettooken";
import MakeGet from "@/utilis/requestrespose/get";
import { useCallback, useEffect, useState } from "react";




const orders = [
    {
        id: "ORD-1001",
        customer: "John Doe",
        email: "john@example.com",
        date: "2026-01-10",
        total: "$120.00",
        status: "Paid",
    },
    {
        id: "ORD-1002",
        customer: "Sarah Smith",
        email: "sarah@example.com",
        date: "2026-01-12",
        total: "$75.50",
        status: "Pending",
    },
    {
        id: "ORD-1003",
        customer: "Michael Lee",
        email: "michael@example.com",
        date: "2026-01-14",
        total: "$210.00",
        status: "Cancelled",
    },
];


//******************* Beage stles is here *********************//
const statusStyles = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
};







//******************* Order Table Component is here *********************//
const AdminOrders = () => {


    const token = getCookie();
    const [fetchloading, setfetchloading] = useState(true);
    const [allorders, setallorders] = useState([]);




    const fetching = useCallback(async (token) => {
        try {
            const response = await MakeGet(`api/orders`, token);

            setallorders(response?.data);


            setfetchloading(false);
        } catch (error) {
            console.error("Error fetching profile:", error);
            setfetchloading(false);
        }
    }, [token]);



    // Simulate fetching user data
    useEffect(() => {

        fetching(token);

    }, [fetching, token]);





    return (
        <div>

            {allorders.length > 0 ? (
                <OrderTable allorders={allorders} />
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-600">No orders found.</p>
                </div>
            )}

        </div>
    )
}



export default AdminOrders;


















//******************* Order Table Component is here *********************//
function OrderTable({ allorders }) {

    const [ismodalopen, setismodalopen] = useState(false);

    console.log("All Orders:", allorders);

    return (
        <div className="w-full bg-white relative">
            <div className="border-b border-gray-200">
                <h2 className="text-lg pb-6 font-semibold text-gray-800">
                    Recent Orders
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-l border-b border-r border-gray-200">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Order ID</th>
                            <th className="px-4 py-3">Customer</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Total</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 border-t border-gray-200">
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3 font-medium text-gray-800">
                                    {order.id}
                                </td>

                                <td className="px-4 py-3">
                                    <div className="font-medium text-gray-800">
                                        {order.customer}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {order.email}
                                    </div>
                                </td>

                                <td className="px-4 py-3 text-gray-600">
                                    {order.date}
                                </td>

                                <td className="px-4 py-3 font-semibold text-gray-800">
                                    {order.total}
                                </td>

                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>

                                <td className="px-4 py-3 text-right">
                                    <button onClick={() => { setismodalopen(true) }} className="text-blue-600 hover:underline text-sm mr-3 cursor-pointer">
                                        View Card
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {ismodalopen && <TableModal ismodalopen={ismodalopen} setismodalopen={setismodalopen} />}
        </div>
    );
}









//******************* Modal Component is here *********************//
const TableModal = ({ ismodalopen, setismodalopen }) => {
    return (
        <div className="bg-white border border-gray-300 shadow-xl rounded-xl p-4 absolute inset-0 w-full h-fit max-h-screen">
            <div onClick={() => { setismodalopen(false) }} className="text-white bg-sky-500 w-8 h-8 flex items-center justify-center p-4 rounded-full absolute hover:rotate-180 transition duration-300 -top-4 -right-4 cursor-pointer shadow-xl">
                x
            </div>


            <ImageDownloadInfo />

        </div>
    )
}





















function ImageDownloadInfo() {

    const [loading, setloading] = useState(false);


    const hanldeDownload = (e) => {
        e.preventDefault();


        setloading(true);


        setTimeout(() => {
            setloading(false);
        }, 3000);

    }





    return (
        <div className="w-full rounded-xl bg-white">
            <div className="flex justuify-between items-start">

                {/* Information Section */}
                <div className="w-3/4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Nature Landscape Image
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                        This is a high-quality nature landscape image suitable for
                        websites, presentations, and marketing materials.
                    </p>

                    <div className="mt-4 space-y-2 text-sm text-gray-700">
                        <p><span className="font-medium">Format:</span> JPG</p>
                        <p><span className="font-medium">Resolution:</span> 3840 × 2160</p>
                        <p><span className="font-medium">File Size:</span> 2.8 MB</p>
                        <p><span className="font-medium">License:</span> Free for commercial use</p>
                    </div>

                </div>

                {/* Image Section */}
                <div className="w-1/4 flex justify-end">

                    <button
                        onClick={(e) => { hanldeDownload(e) }}
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-sky-500 cursor-pointer px-3 py-3 text-sm font-medium text-white hover:bg-sky-700 transition flex gap-2 items-center shadow-xl"
                    >
                        {
                            loading && <SpinLoader />
                        }
                        <span className="text-md font-semibold">{loading ? "Downloading..." : "Download Card"}</span>
                    </button>
                </div>
            </div>

            <div className="mt-10 w-full flex items-center gap-4 flex-wrap">

                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <img

                            key={i}
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
                            alt="Nature Landscape"
                            className="w-[300px] h-full rounded-lg object-cover"
                        />
                    ))
                }


            </div>
        </div>
    );
}