"use client";
import SpinLoader from "@/app/componnent/SpingLoader";
import useCartStore from "@/store/useCartStore";
import useTradingFinalPreview from "@/store/useTradingFinalPreview";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";



const FinalCardsPage = () => {

    const [loading, setloading] = useState(false);
    const { addToCart } = useCartStore();
    const { tradingcart } = useTradingFinalPreview();
    const router = useRouter();

    function addtocartMainCart(e) {
        e.preventDefault();
        setloading(true);

        setTimeout(() => {
            addToCart(tradingcart[0]);
            setloading(false);
        }, 900);
    }


    if (tradingcart[0]?.FinalProduct < 1) return <div>No cards found.</div>;



    return (
        <div className="text-black max-w-7xl mx-auto" style={{ padding: "2rem" }}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mb-4">
                    <button onClick={() => { router.back() }} className="border border-gray-200 bg-white p-2 rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition duration-100">
                        <BiLeftArrowAlt className="text-2xl" />
                    </button>
                    <h1 className="text-xl text-gray-600">Your Customized Cards</h1>
                </div>
                <div>
                    <button onClick={(e) => { addtocartMainCart(e) }} className="border border-gray-200 bg-sky-400 text-white p-2 rounded-md shadow-md cursor-pointer hover:bg-sky-500 transition duration-100 flex items-center gap-2">
                        {loading ? <SpinLoader /> : <IoCartOutline className="text-xl" />}
                        Add to Cart
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "45px" }}>

                {tradingcart[0]?.FinalProduct.map((card, idx) => (
                    <Image className="rounded-lg h-[280px] w-[185px] border border-gray-200" src={card} width={1000} height={1000} key={idx} alt="Final-Image-Card" />
                ))}

            </div>
        </div>
    );
};

export default FinalCardsPage;
