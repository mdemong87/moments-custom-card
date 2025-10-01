"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CiCirclePlus } from "react-icons/ci";
import CardSidebar from "../../../componnent/CardSidebar";
import ViewCard from "../../../componnent/ViewCard";

const layers = [
    "dresses", "heads", "hairstyles", "crowns",
    "beards", "eyes", "mouths", "noses"
];



/**************** Main Component Here ******************/
const ProductCustomizer = () => {
    const [product, setProduct] = useState(null);
    const [cards, setCards] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [color, setColor] = useState("#aabbcc");
    const router = useRouter();


    /******* Add New Card Function ********/
    const addNewCard = () => {
        const base = product.acf?.base_images?.[0]?.url || product.acf?.base_images?.[0];
        const initialLayers = {};
        layers.forEach(layer => {
            if (layer === "beards") return;
            const items = product.acf?.[layer] || [];
            if (items.length > 0) initialLayers[layer] = items[0].url || items[0];
        });
        setCards([...cards, { baseImage: base, selectedLayers: initialLayers }]);
        setActiveCardIndex(cards.length);
    };

    /******* Removed Card Function ********/
    const removeCard = (index) => {
        setCards(prev => {
            const updated = prev.filter((_, i) => i !== index);
            let newActive = activeCardIndex;
            if (updated.length === 0) newActive = 0;
            else if (index < activeCardIndex) newActive -= 1;
            else if (index === activeCardIndex) newActive = Math.min(activeCardIndex, updated.length - 1);
            setActiveCardIndex(newActive);
            return updated;
        });
    };

    /******* Selected Layer Image Function ********/
    const goToFinalView = () => {
        localStorage.setItem("customCards", JSON.stringify(cards));
        router.push("/final");
    };


    return (
        <>
            <div className="grid grid-cols-12 gap-2 h-screen w-screen fixed bg-gray-100">
                <div className="col-span-12 lg:col-span-3 w-full h-full">
                    <CardSidebar
                        cards={cards}
                        activeIndex={activeCardIndex}
                        setActiveIndex={setActiveCardIndex}
                        addCard={addNewCard}
                        removeCard={removeCard}
                    />
                </div>
                <div className="col-span-9 h-screen w-full">
                    <div className="grid grid-cols-10 h-full mt-2 lg:mt-0">
                        <div className="col-span-10 lg:col-span-6 flex items-center justify-center lg:-translate-y-[50px] w-screen lg:w-full">
                            <div className="border border-gray-200 rounded-md bg-white w-[60%] h-[50%]">asdfasd</div>
                        </div>
                        <div className="col-span-10 lg:col-span-4 w-screen lg:w-full h-full bg-white border-t lg:border-l border-gray-200 px-2 md:px-7 lg:px-6 mt-2 lg:mt-0">

                            <div className="h-[83vh] mt-2">

                                {/* Image Upload start */}
                                <div className="">
                                    <div>
                                        <label className="block text-gray-700 mb-1">Upload Image <span className="text-red-500 text-xl">*</span></label>
                                        <label htmlFor="thamnail_image">
                                            <div className="w-full h-[180px] bg-gray-100 roundede-md flex items-center justify-center cursor-pointer relative">


                                                <CiCirclePlus className="text-8xl text-gray-300" />

                                            </div>
                                        </label>
                                        <input onChange={(e) => { handleFileChange(e, setproductThumbnail) }}
                                            id="thamnail_image"
                                            type="file"
                                            className="hidden"
                                            accept=" image/png, image/jpeg, image/jpg"
                                        />

                                    </div>
                                </div>
                                {/* Image Upload end */}


                                {/* text area Upload start */}
                                <div className=" mt-2">
                                    <div>
                                        <label className="block text-gray-700 mb-1">Enter Text <span className="text-red-500 text-xl">*</span></label>
                                        <textarea name="" id="" className="border-2 border-gray-300 rounded-md w-full h-[180px] bg-gray-100 text-gray-700 px-2 py-1" placeholder="">

                                        </textarea>

                                    </div>
                                </div>
                                {/* text area Upload end */}

                                {/* color picker start */}
                                <div className="mt-2">
                                    <div className="w-full">
                                        <HexColorPicker color={color} onChange={setColor} />
                                    </div>
                                </div>
                                {/* color picker end */}
                            </div>
                            <ViewCard goToFinalView={goToFinalView} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProductCustomizer;
