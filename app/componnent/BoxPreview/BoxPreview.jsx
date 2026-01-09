'use client';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const BoxPreview = ({ children }) => {

    const [BoxPreviewOpen, setboxPreviewOpen] = useState(false);


    return (
        <div className="absolute inset-0 w-4/4 h-4/4 flex items-center">
            <div className={`h-[600px] bg-white rounded-r-3xl shadow-2xl text-balck flex justify-between transition-all duration-500 ${BoxPreviewOpen ? " w-[350px] md:w-[500px] lg:w-[600px] border-r border-gray-300" : "w-[0px] border-r border-gray-50"}`}>
                <div className={`h-full p-4 flex items-center justify-center transition-all duration-500 ${BoxPreviewOpen ? "w-full opacity-100 block" : "w-0 opacity-0 hidden"}`}>
                    {children}
                </div>
                <div className={`h-full w-fit flex items-center transition-all duration-300 ${BoxPreviewOpen ? "-translate-x-1/2" : "translate-x-0"}`}>
                    <div onClick={() => { setboxPreviewOpen(!BoxPreviewOpen) }} className="flex rounded-md items-center cursor-pointer">
                        <div className="h-[80px] w-[18px] flex items-center bg-sky-300 rounded-xl">
                            <IoIosArrowDown className={`text-xl text-white ${BoxPreviewOpen ? "rotate-90" : "rotate-270"}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxPreview;