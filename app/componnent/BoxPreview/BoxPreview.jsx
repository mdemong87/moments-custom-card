'use client';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const BoxPreview = ({ children }) => {

    const [BoxPreviewOpen, setboxPreviewOpen] = useState(false);


    return (
        <div className="absolute inset-0 w-4/4 h-4/4 flex items-center">
            <div className={`h-[600px] bg-white rounded-r-3xl shadow-2xl text-balck flex justify-between ${BoxPreviewOpen ? "w-3/4" : "w-[10px]"}`}>
                <div className={`h-full p-4 flex items-center justify-center ${BoxPreviewOpen ? "w-full block" : "hidden"}`}>
                    {children}
                </div>
                <div className={`h-full w-fit flex items-center ${BoxPreviewOpen ? "translate-x-1/2" : "translate-x-0"}`}>
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