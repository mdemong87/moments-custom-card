"use client";
import ApplicationSkeleton from "@/app/componnent/ApplicationSkeleton";
import getCookie from "@/utilis/helper/cookie/gettooken";
import ImageLinkMaker from "@/utilis/helper/ImageLinkMaker";
import MakeGet from "@/utilis/requestrespose/get";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CardPreview from "../../../componnent/CardPreview";
import CardSidebar from "../../../componnent/CardSidebar";
import SideController from "../../../componnent/SideController";
import ViewCard from "../../../componnent/ViewCard";

const layers = [
    "dresses", "skin_tones", "hairs", "crowns",
    "beards", "eyes", "mouths", "noses"
];



/**************** Main Component Here ******************/
const ProductCustomizer = () => {
    const [product, setProduct] = useState(null);
    const [cards, setCards] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const router = useRouter();
    const token = getCookie();


    /************** Fetch product & load saved cards **************/
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await MakeGet('api/products/customizable-traditional-playing-cards-2940', token);

            if (!res.success) {
                toast.error("There was a server side Problem");
                return;
            }


            setProduct(res?.data);

            const savedCards = localStorage.getItem("customCards");
            if (savedCards) {
                setCards(JSON.parse(savedCards));
                setActiveCardIndex(0);
                return;
            }

            const basebar = res?.data?.customizations?.base_cards?.[0];
            const base = ImageLinkMaker(basebar?.image);
            const initialLayers = {};
            layers.forEach(layer => {
                if (layer === "beards") return;
                const items = res?.data?.customizations?.[layer];
                console.log(items);
                if (items.length > 0) initialLayers[layer] = ImageLinkMaker(items[0]?.image);
            });

            setCards([{ baseImage: base, selectedLayers: initialLayers }]);
            setActiveCardIndex(0);
        };
        fetchProduct();
    }, []);


    if (!product) return <ApplicationSkeleton />;
    const activeCard = cards[activeCardIndex];

    /******* Selected Layer Image Function ********/
    const selectLayerImage = (layer, url) => {
        setCards(prev =>
            prev.map((card, i) => {
                if (i !== activeCardIndex) return card;
                const updatedLayers = { ...card.selectedLayers };
                if (updatedLayers[layer] === url) delete updatedLayers[layer];
                else updatedLayers[layer] = url;
                return { ...card, selectedLayers: updatedLayers };
            })
        );
    };

    /******* Select Base Image Function ********/
    const selectBaseImage = (url) => {
        setCards(prev => prev.map((card, i) => i === activeCardIndex ? { ...card, baseImage: url } : card));
    };

    /******* Add New Card Function ********/
    const addNewCard = () => {

        const basebartwo = product?.customizations?.base_cards?.[0];
        const baseTwo = ImageLinkMaker(basebartwo?.image);
        const initialLayersTwo = {};
        layers.forEach(layer => {
            if (layer === "beards") return;
            const items = product?.customizations?.[layer];

            console.log(items);

            if (items.length > 0) initialLayersTwo[layer] = ImageLinkMaker(items[0]?.image);
        });

        setCards([...cards, { baseImage: baseTwo, selectedLayers: initialLayersTwo }]);
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
                <div className="col-span-12 lg:col-span-2 w-full h-full">
                    <CardSidebar
                        cards={cards}
                        activeIndex={activeCardIndex}
                        setActiveIndex={setActiveCardIndex}
                        addCard={addNewCard}
                        removeCard={removeCard}
                    />
                </div>
                <div className="col-span-10 h-screen w-full">
                    <div className="grid grid-cols-10 h-full mt-2 lg:mt-0">
                        <div className="col-span-10 lg:col-span-6 flex items-center justify-center lg:-translate-y-[50px] w-screen lg:w-full">
                            <CardPreview activeCard={activeCard} />
                        </div>
                        <div className="col-span-10 lg:col-span-4 w-screen lg:w-full h-full bg-white border-t lg:border-l border-gray-200 px-2 md:px-7 lg:px-6 mt-2 lg:mt-0">
                            <SideController product={product} activeCard={activeCard} selectBase={selectBaseImage} selectLayer={selectLayerImage} />
                            <ViewCard goToFinalView={goToFinalView} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProductCustomizer;
