"use client";
import SpinLoader from "@/app/componnent/SpingLoader";
import useCartStore from "@/store/useCartStore";
import useDeckFinalPreview from "@/store/useDeckFinalPreview";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

const layers = [
    "dresses", "skin_tones", "hairs", "crowns",
    "beards", "eyes", "mouths", "noses"
];



const FinalCardsPage = () => {

    const [cards, setCards] = useState([]);
    const { addToCart } = useCartStore();
    const { deckcart, removeFromCart } = useDeckFinalPreview();
    const [loading, setloading] = useState(false);
    const router = useRouter();




    const adddeckcart = (e) => {
        e.preventDefault();
        setloading(true);
        setTimeout(() => {
            addToCart(deckcart[0]);
            setloading(false);
        }, 900);

    }



    if (deckcart[0]?.FinalProduct < 1) return <div>No cards found.</div>;

    return (
        <div className="text-black max-w-7xl mx-auto" style={{ padding: "2rem" }}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mb-4">
                    <button onClick={() => { router.back() }} className="border border-gray-200 bg-white p-2 rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition duration-100">
                        <BiLeftArrowAlt className="text-2xl" />
                    </button>
                    <h1 className="text-xl text-gray-600 hidden md:block">Your Customized Cards</h1>
                </div>
                <div>
                    <button onClick={(e) => { adddeckcart(e) }} className="border border-gray-200 bg-sky-400 hover:bg-sky-500 text-white p-2 rounded-md shadow-md cursor-pointer transition duration-100 flex items-center gap-2">
                        {loading ? <SpinLoader /> : <IoCartOutline className="text-xl" />}
                        Add to Cart
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", padding: "2rem", margin: "45px 0px" }}>

                {
                    deckcart[0]?.FinalProduct?.map((card, idx) => (

                        <div key={idx} className="w-[170px] h-[280px] lg:w-[216px] lg:h-[312px] flex items-center justify-center ">
                            <Image className="object-contain z-10" src={card} width={1000} height={1000} key={idx} alt="final-cards" />
                        </div>

                    ))
                }


            </div>
        </div>
    );
};

export default FinalCardsPage;
