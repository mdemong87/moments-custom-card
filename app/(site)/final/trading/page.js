"use client";
import useCartStore from "@/store/useCartStore";
import useTradingFinalPreview from "@/store/useTradingFinalPreview";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";



const FinalCardsPage = () => {

    const [cards, setCards] = useState([]);

    const { addToCart } = useCartStore();
    const { tradingcart } = useTradingFinalPreview();


    useEffect(() => {
        const saved = localStorage.getItem("tradingCards");
        if (saved) setCards(JSON.parse(saved));
    }, []);

    const router = useRouter();
    if (!cards.length) return <div>No cards found.</div>;


    function addtocartMainCart(e) {
        e.preventDefault();
        addToCart(tradingcart[0])
    }



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
                    <button onClick={(e) => { addtocartMainCart(e) }} className="border border-gray-200 bg-sky-400 text-white p-2 rounded-md shadow-md cursor-pointer hover:bg-sky-500 transition duration-100">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "45px" }}>
                {cards.map((card, idx) => (
                    <Image className="rounded-lg h-[280px] w-[185px] border border-gray-200" src={card} width={1000} height={1000} key={idx} alt="Final-Image-Card" />
                ))}
            </div>
        </div>
    );
};

export default FinalCardsPage;
