"use client";

export default function ContactForm() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
            {/* Title */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-700">
                    WE'VE GOT YOU <span className="text-sky-400">COVERED!</span>
                </h1>
                <p className="mt-5 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                    Have questions? Need help with an order? Want to create something truly special?
                    We’re here to make your experience effortless and exciting.
                </p>
            </div>

            {/* Form Container */}
            <div className="bg-blue-50 rounded-xl shadow-md w-full max-w-xl p-6 sm:p-8 border border-gray-100">
                <form className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 rounded-md bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-md bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 rounded-md bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-3 rounded-md bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-gray-700 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-sky-400 hover:bg-blue-600 text-white py-3 rounded-md font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
}
