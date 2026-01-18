'use client'

import getCookie from "@/utilis/helper/cookie/gettooken";
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

const statusStyles = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
};








const AdminOrders = () => {


    const token = getCookie();
    const [fetchloading, setfetchloading] = useState(true);
    const [allorders, setallorders] = useState([]);




    const fetching = useCallback(async (token) => {
        try {
            const response = await MakeGet(`api/allorders`, token);

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
                    <p className="text-gray-600">You have not placed any orders yet.</p>
                </div>
            )}

        </div>
    )
}

export default AdminOrders;




















function OrderTable({ allorders }) {

    console.log("All Orders:", allorders);

    return (
        <div className="w-full bg-white">
            <div className="border-b border-gray-200">
                <h2 className="text-lg pb-6 font-semibold text-gray-800">
                    My Orders
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-l border-b border-r border-gray-200">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Order ID</th>
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
                                    <button className="text-blue-600 hover:underline text-sm mr-3">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}