"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

const layers = [
    "dresses",
    "heads",
    "hairstyles",
    "crowns",
    "beards",
    "eyes",
    "mouths",
    "noses"
];



const FinalCardsPage = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("customCards");
        if (saved) setCards(JSON.parse(saved));
    }, []);

    const router = useRouter();

    const previousPage = () => {
        localStorage.setItem("customCards", JSON.stringify(cards));
        router.push("/");
    };

    if (!cards.length) return <div>No cards found.</div>;

    return (
        <div className="text-black" style={{ padding: "2rem" }}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mb-4">
                    <button onClick={() => { router.back() }} className="border border-gray-200 bg-white p-2 rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition duration-100">
                        <BiLeftArrowAlt className="text-2xl" />
                    </button>
                    <h1 className="text-xl text-gray-600">Your Customized Cards</h1>
                </div>
                <div>
                    <button onClick={() => { router.back() }} className="border border-gray-200 bg-sky-400 text-white p-2 rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition duration-100">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "45px" }}>
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        style={{
                            position: "relative",
                            width: "200px",
                            height: "300px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            marginBottom: "1rem"
                        }}
                    >
                        {/* Base image */}
                        {card.baseImage && (
                            <img
                                src={card.baseImage}
                                alt="Base Card"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain"
                                }}
                            />
                        )}

                        {/* Layers */}
                        {layers.map(
                            (layer) =>
                                card.selectedLayers[layer] && (
                                    <div key={layer}>
                                        {/* Top half */}
                                        <img
                                            src={card.selectedLayers[layer]}
                                            alt={layer}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                width: "55%",
                                                height: "60%",
                                                objectFit: "contain",
                                                paddingTop: "55px"
                                            }}
                                        />
                                        {/* Bottom half mirrored */}
                                        <img
                                            src={card.selectedLayers[layer]}
                                            alt={`${layer}-mirrored`}
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: "50%",
                                                transform: "translateX(-50%) scaleY(-1)",
                                                width: "55%",
                                                height: "60%",
                                                objectFit: "contain",
                                                paddingTop: "55px"
                                            }}
                                        />
                                    </div>
                                )
                        )}
                    </div>

                ))}
            </div>
        </div>
    );
};

export default FinalCardsPage;
