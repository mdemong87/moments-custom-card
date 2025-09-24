"use client";
import useLoadingStore from "@/store/useLoadingStore";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    const { isLoading, setLoading } = useLoadingStore();

    // Simulate fetching user data
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            // Mock fetched data
            setFormData({
                name: "Md Emon Hossen",
                email: "mdemong87@gmail.com",
                address: "Dhaka, Bangladesh",
            });
            setLoading(false);
        }, 1000); // 1s delay to simulate API
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Data:", formData);
        alert("Profile updated successfully!");
        // You can send formData to your API here
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-full bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Profile Information
                </h1>

                {isLoading ? (
                    // Skeleton Loading
                    <div className="space-y-4 animate-pulse">
                        <div className="h-10 bg-gray-200 rounded"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-gray-700 mb-1">Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                        </div>

                        {/* Update Button */}
                        <div className="w-full flex justify-end">
                            <button
                                type="submit"
                                className="w-fit px-3 bg-sky-400 text-white py-2 rounded-lg hover:bg-sky-600 transition flex items-center justify-center gap-2"
                            >

                                {
                                    isLoading && <div className="w-[20px] h-[20px] rounded-full border-b-3 border-l-3 bordergray-50 animate-spin">
                                    </div>
                                }

                                Update Profile
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
