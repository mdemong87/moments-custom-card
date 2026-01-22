'use client'

import PDFViewers from "@/app/componnent/PDFViewers.jsx";
import getCookie from "@/utilis/helper/cookie/gettooken";
import MakeGet from "@/utilis/requestrespose/get";
import { useCallback, useEffect, useState } from "react";
import RecentOrdersSkeleton from "../../../../componnent/skelaton/RecentOrdersSkeleton.jsx";




//******************* Beage stles is here *********************//
const statusStyles = {
    completed: "bg-green-100 text-green-700",
    Paid: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
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



    if (fetchloading) {
        return <RecentOrdersSkeleton />
    }


    return (
        <div>

            {allorders?.length > 0 ? (
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
    const [modalinfo, setmodalinfo] = useState(null);


    console.log(allorders);


    return (
        <div className="w-full bg-white">
            <div className="border-b border-gray-200">
                <h2 className="text-lg pb-6 font-semibold text-gray-800">
                    Recent Orders
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-l border-b border-r border-gray-200 pb-[100px]">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Order ID</th>
                            <th className="px-4 py-3">Customer</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Total</th>
                            <th className="px-4 py-3">Is Customized</th>
                            <th className="px-4 py-3">Payment Status</th>
                            <th className="px-4 py-3">Delivery Status</th>
                            <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 border-t border-gray-200">
                        {allorders?.map((order) => (
                            <tr
                                key={order.id}
                                className="hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3 font-medium text-gray-800">
                                    {order.id}
                                </td>

                                <td className="px-4 py-3">
                                    <div className="font-medium text-gray-800">
                                        {order.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {order.email}
                                    </div>
                                </td>

                                <td className="px-4 py-3 text-gray-600">
                                    {order.created_at}
                                </td>

                                <td className="px-4 py-3 font-semibold text-gray-800">
                                    {order.total}
                                </td>

                                <td className="px-4 py-3 font-semibold text-gray-800">
                                    {order.is_customized ? "Customizable" : "Simple"}
                                </td>

                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.payment_status]}`}
                                    >
                                        {order.payment_status}
                                    </span>
                                </td>

                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                                    >
                                        {order.status == 'completed' ? "Delivered" : order.status}
                                    </span>
                                </td>

                                <td className="px-4 py-3 text-right">
                                    <button onClick={() => { setismodalopen(true), setmodalinfo(order) }} className="text-blue-600 hover:underline text-sm mr-3 cursor-pointer">
                                        View PDF
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {ismodalopen && <TableModal ismodalopen={ismodalopen} setismodalopen={setismodalopen} modalinfo={modalinfo} />}
        </div>
    );
}









//******************* Modal Component is here *********************//
const TableModal = ({ ismodalopen, setismodalopen, modalinfo }) => {
    return (
        <div className="bg-white border border-gray-300 shadow-xl rounded-xl p-0 absolute inset-0 w-full h-full">
            <div onClick={() => { setismodalopen(false) }} className="text-white bg-sky-500 w-8 h-8 flex items-center justify-center p-4 rounded-full absolute hover:rotate-180 transition duration-300 -top-4 -right-4 cursor-pointer shadow-xl">
                x
            </div>


            <ImageDownloadInfo modalinfo={modalinfo} />

        </div>
    )
}





















function ImageDownloadInfo({ modalinfo }) {

    return (
        <div className="w-full h-full rounded-xl bg-white">
            <div className="w-full h-full flex items-center gap-4 flex-wrap">

                {/* PDF view seciton is here */}

                <PDFViewers fulldata={modalinfo} url={modalinfo?.customized_file} />


            </div>
        </div>
    );
}